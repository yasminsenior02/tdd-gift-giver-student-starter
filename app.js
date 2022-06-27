const express = require("express");
const bodyparser = require("body-parser");
const app = express();

module.exports = app;

const morgan = require("morgan");
app.use(morgan("tiny"));
app.use(bodyparser.json());

app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});
