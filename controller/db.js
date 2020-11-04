require("../config/dbConfig");

var project = require("../models/project");
var contact = require("../models/contact");
var paper = require("../models/paper");
var tech = require("../models/tech");

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

const findTech = async () => {
  return tech
    .find({})
    .then((res) => {
      // console.log(res);
      return res;
    })
    .catch((err) => console.log(err));
};

const findPapers = () => {
  try {
    return paper.find({}, (err, res) => {
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

const saveContact = (email, msg) => {
  try {
    let newContact = new contact({
      email,
      msg,
    });
    newContact.save().catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
const saveTech = (path, title) => {
  try {
    let newtech = new tech({
      path,
      title,
    });
    newtech.save().catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { findProjects, saveContact, findPapers, findTech, saveTech };
