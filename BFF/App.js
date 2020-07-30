  
const express = require("express");
const app = express();
const morgan = require("morgan");
const router = require('./routes/jiraCall.js')
const dotenv = require('dotenv')

app.use(morgan("short"));
dotenv.config()

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(router)

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});