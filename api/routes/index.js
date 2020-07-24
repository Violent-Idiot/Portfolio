var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("yo");
  console.log("yo");
});

module.exports = router;
