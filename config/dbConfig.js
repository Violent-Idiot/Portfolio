var mongoose = require("mongoose");
var path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

// var newProject = new paper({
//   path: "uo",
//   title: "yo",
//   date: "iidhiewug",
// });
// newProject.save().catch((err) => console.log(err));
