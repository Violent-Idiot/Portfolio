var express = require("express");

var {
  findProjects,
  saveContact,
  findPapers,
  findTech,
  saveTech,
} = require("../controller/db");

var router = express.Router();

/* GET home page. */
router.get("/project", async (req, res, next) => {
  let projects = await findProjects();
  res.json(projects);
});

router.get("/paper", async (req, res, next) => {
  let papers = await findPapers();
  res.json(papers);
});

router.get("/tech", async (req, res, next) => {
  let tech = await findTech();
  res.json(tech);
});
// router.post("/savetech", async (req, res, next) => {
//   let { path, title } = req.body;
//   console.log(req.body);
//   await saveTech(path, title);
//   let tech = "done";
//   res.json(tech);
// });
router.post("/submit", (req, res, next) => {
  // console.log(req.body);
  const { email, msg } = req.body;
  saveContact(email, msg);
  res.json({
    success: true,
  });
});
// "proxy": "http://localhost:5000"
module.exports = router;
