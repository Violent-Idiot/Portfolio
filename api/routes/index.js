var express = require("express");

var findProjects = require("../controller/db");

var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  let projects = await findProjects();
  res.json(projects);
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  res.json({
    success: true,
  });
});

module.exports = router;
