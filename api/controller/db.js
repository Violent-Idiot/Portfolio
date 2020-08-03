require("../config/dbConfig");

var project = require("../models/project");
var contact = require("../models/contact");

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
module.exports = { findProjects, saveContact };
