var mongoose = require("mongoose");

var paperSchema = new mongoose.Schema({
  path: String,
  title: String,
});

module.exports = mongoose.model("tech", paperSchema);
