var mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({
  title: String,
  body: String,
});

module.exports = mongoose.model("project", projectSchema);
