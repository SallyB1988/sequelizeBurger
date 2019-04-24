// HTML routes for sending users to different html pages (in this case
// we only have one.)

const path = require("path");

// SALLY --- THE DATABASE DOESN"T SEEM TO BE CONNECTING. CHECK THE DATABASE NAME

// Routes
// ==========================================================
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index", req.body);   // render the index page
  });
};
