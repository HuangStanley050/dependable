const express = require("express");
const router = express.Router();
const requestPromise = require("request-promise");

router.get("/ticketList", async (req, res) => {

	let ticketList = {};
  res.setHeader("Content-Type", "application/json");
  await requestPromise
    .get({
      url:
        "https://jira-uat.auiag.corp/rest/api/2/search?jql=PROJECT+%3D+%22Self+Service+Journey%22+AND+type+%3D+Story+AND++statusCategory+%21%3D+Done&maxResults=60",
      headers: {
        Authorization:
          "Basic " + Buffer.from(process.env.API_USERNAME + ":" + process.env.API_SECRET).toString("base64"),
      },
    })
    .then((response) => {
      ticketList = JSON.parse(response);
    })
    .catch(function (err) {
      console.log(`Jira call Failed: ${err}`);
      ticketList = err.statusCode;
    });
  res.json(ticketList);
  res.end();
});

module.exports = router