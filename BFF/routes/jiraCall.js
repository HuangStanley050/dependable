const express = require("express");
const router = express.Router();
const requestPromise = require("request-promise");

const result = [];

router.get("/ticketList", async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  try {
    const response = await fetchData("https://jira-uat.auiag.corp/rest/api/2/search?jql=PROJECT+%3D+%22Self+Service+Journey%22+AND+type+%3D+Story+AND++statusCategory+%21%3D+Done&maxResults=60");

    await normaliseList(response);

    res.json(result);
  } catch (e) {
    console.error(`Jira call Failed: ${err}`);
    res.json(err);
  } finally {
    res.end();
  }
});

const normaliseIssue = async (issueId) => {
  const issue = await fetchData(`https://jira-uat.auiag.corp/rest/api/latest/issue/${issueId}`)

  const issuelinks = (issue.fields.issuelinks || [])
    .filter(issuelink => issuelink.type.id === "10301")

  if(issuelinks.length) {
    result.push({
      key: issue.key,
      project: {
        key: issue.fields.project.key,
        name: issue.fields.project.name
      },
      epic: issue.fields.customfield_12100,
      points: issue.fields.customfield_10002,
      estimatedDurationDays: 14,
      priority: issue.fields.priority.name,
      dependencies: issuelinks.map(issuelink => issuelink.inwardIssue.key)
    })
  }

  return result;
}

const normaliseList = async (data) => {
  let issueIds = data.issues.map(issue => issue.id);

  return await issueIds.forEach(issueId => normaliseIssue(issueId))
}
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
