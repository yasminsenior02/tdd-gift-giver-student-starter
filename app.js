const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const giftrouter = require("./Routes/gift-exchange");
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use("./gift-exchange", giftrouter);
app.use(bodyparser.json());

app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});
module.exports = app;
