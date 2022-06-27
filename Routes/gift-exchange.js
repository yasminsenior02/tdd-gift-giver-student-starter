const express = require("express");
const appRouter = express.Router();

// export default express();

appRouter.post("/pairs", async (req, res, next) => {
  res.status(200).json({ names: [] });
});
appRouter.post("/traditional", async (req, res, next) => {
  res.status(200).json({ names: [] });
});
module.exports = appRouter;
