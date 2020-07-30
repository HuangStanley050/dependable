const express = require("express");
const router = express.Router();
const requestPromise = require("request-promise");

router.get("/ticketList", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  requestPromise
    .get({
      url:
        "https://jira-uat.auiag.corp/rest/api/2/search?jql=PROJECT+%3D+%22Self+Service+Journey%22+AND+type+%3D+Story+AND++statusCategory+%21%3D+Done&maxResults=60",
      headers: {
        Authorization:
          "Basic " + Buffer.from(process.env.API_USERNAME + ":" + process.env.API_SECRET).toString("base64"),
      },
      json: true
    })
    .then((response) => {
      res.json(response);
    })
    .catch(function (err) {
      console.log(`Jira call Failed: ${err}`);
      res.json(err);
    })
    .finally(() => {
      res.end();
    });
});

module.exports = router