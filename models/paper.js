var mongoose = require("mongoose");

var paperSchema = new mongoose.Schema({
  path: String,
  title: String,
  date: String,
});

module.exports = mongoose.model("paper", paperSchema);
