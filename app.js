const express = require("express");
const morgan = require("morgan");
const giftrouter = require("./Routes/gift-exchange");

// const bodyparser = require("body-parser");
const app = express();

app.use(morgan("tiny"));
app.use("/gift-exchange", giftrouter);
app.use(express.json());

app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
  console.log(req);
});
module.exports = app;
