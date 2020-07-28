var express = require("express");

var { findProjects, saveContact } = require("../controller/db");

var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  let projects = await findProjects();
  res.json(projects);
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  const { email, msg } = req.body;
  saveContact(email, msg);
  res.json({
    success: true,
  });
});

module.exports = router;
