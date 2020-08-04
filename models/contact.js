var mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({
  email: String,
  msg: String,
});

module.exports = mongoose.model("contact", projectSchema);
