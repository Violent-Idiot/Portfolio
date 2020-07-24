var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/", function (req, res, next) {
  console.log(req.body);
  res.json({
    success: true,
  });
});

module.exports = router;
