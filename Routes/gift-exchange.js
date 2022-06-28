const express = require("express");
const router = express.Router();

// export default express();
router.post("/", async (req, res, next) => {
  res.status(200);
  res.send(req.query);
});
router.post("/pairs", async (req, res, next) => {
  res.status(200);
  res.send(req.query);
});
router.post("/traditional", async (req, res, next) => {
  res.status(200);
  res.send(req.query);
});
module.exports = router;
