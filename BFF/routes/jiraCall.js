const express = require("express");
const router = express.Router();
const requestPromise = require("request-promise");

const cache = {};

router.get("/ticketList", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const searchType = req.query.type;
  if (!searchType) {
    return res.json([]);
  }
  try {
    const response = await fetchData(
      `${process.env.API_JIRA_HOST}/rest/api/2/search?jql=PROJECT+%3D+%22${searchType}%22+AND+type+%3D+Story+AND++statusCategory+%21%3D+Done&maxResults=60`
    );

    const result = await normaliseResponse(response);

    res.json(result);
  } catch (e) {
    console.error("Jira call Failed: ", e);
    res.json(e);
  } finally {
    res.end();
  }
});

const getSprint = (sprintsArray) => {
  let sprint = {}
  if (sprintsArray) {
    const sprints = sprintsArray.map(sprint => {
      return sprint.match(/startDate=(\d{4}-\d{2}-\d{2}).*endDate=(\d{4}-\d{2}-\d{2})/i) ||
        sprint.match(/(\d{1,2}\/\d{1,2}) - (\d{1,2}\/\d{1,2}),startDate/i)
          .map((str, index) => {
            if (index === 0) return ""

            return str.replace(/(\d{1,2})\/(\d{1,2})/, (matcher, p1, p2) => ["2020", p2.padStart(2, '0'), p1].join('-'))
          })
  })

    sprint = sprints
      .reduce((sprint, currentMatch) => ({
          startDate: sprint?.startDate < currentMatch?.[1] ? sprint?.startDate : currentMatch?.[1],
          endDate: sprint?.endDate > currentMatch?.[2] ? sprint?.endDate : currentMatch?.[2]
        }), null)
  }

  return sprint
}

const normaliseIssue = async (issueId, results) => {
  if (cache[issueId]) {
    return cache[issueId];
  }

  try {
    const issue = await fetchData(
      `${process.env.API_JIRA_HOST}/rest/api/latest/issue/${issueId}`
    );

    const issuelinks = (issue.fields.issuelinks || []).filter((issuelink) => {
      return issuelink.type.id === "10301" && issuelink.inwardIssue;
    });

    const normalisedIssue = {
      key: issue.key,
      project: {
        key: issue.fields.project.key,
        name: issue.fields.project.name,
      },
      epic: issue.fields.customfield_12100,
      points: issue.fields.customfield_10002,
      estimatedDurationDays: 14,
      priority: issue.fields.priority.name,
      dependencyKeys: issuelinks.map((issuelink) => {
        return issuelink.inwardIssue.id;
      }),
      dependencies: issuelinks.map((issuelink) => issuelink.inwardIssue.key),
    };

    if (issue.fields.customfield_11101 && issue.fields.customfield_11101.length) {
      normalisedIssue.sprint = getSprint(issue.fields.customfield_11101)
    }

    cache[issueId] = normalisedIssue;

    return normalisedIssue
  } catch (e) {
    console.log("normaliseIssue failed: ", e);
  }
};

const normaliseIssues = async (issueIds, results) => {
  try {
    const issues = issueIds.map((issueId) => normaliseIssue(issueId, results));
    const normalisedIssues = await Promise.all(issues);

    normalisedIssues.forEach((normalisedIssue) => {
      results.push(normalisedIssue);
    });

    const deps = normalisedIssues.flatMap(
      (normalisedIssue) => normalisedIssue.dependencyKeys
    );

    if (deps.length) {
      await normaliseIssues(deps, results);
    }
  } catch (e) {
    console.log("normaliseIssues failed: ", e);
  }
};

const normaliseResponse = async (data) => {
  const issueIds = data.issues.map((issue) => issue.id);
  const results = [];

  try {
    await normaliseIssues(issueIds, results);
  } catch (e) {
    console.log("normaliseResponse failed: ", e);
  }

  return results;
};

const fetchData = async (url) => {
  // can await other promises here and use loops or whatever.

  return await requestPromise.get({
    url,
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.API_USERNAME + ":" + process.env.API_SECRET
        ).toString("base64"),
    },
    json: true,
  });
};

module.exports = router;
