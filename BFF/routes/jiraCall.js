const express = require("express");
const router = express.Router();
const requestPromise = require("request-promise");

router.get("/ticketList", async (req, res) => {
  let ticketList = {};
  res.setHeader("Content-Type", "application/json");
  await requestPromise
    .get({
      url:
        "https://jira.iag.com.au/rest/api/2/search?jql=PROJECT+%3D+%22Self+Service+Journey%22+AND+type+%3D+Story+AND++statusCategory+%21%3D+Done&maxResults=60",
      headers: {
        Authorization:
          "Basic " + btoa(process.env.USER_NAME + ":" + process.env.SECRET),
      },
    })
    .then((response) => {
      ticketList = JSON.parse(response.issues);
    })
    .catch(function (err) {
      console.log(`Jira call Failed: ${err.statusCode}`);
      ticketList = err.statusCode;
    });
  res.json(ticketList);
  res.end();
});

module.exports = router