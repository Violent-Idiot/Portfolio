require("../config/dbConfig");
var project = require("../models/project");

const findProjects = () => {
  try {
    return project.find({}, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        return res;
      }
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = findProjects;
