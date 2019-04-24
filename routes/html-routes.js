// HTML routes for sending users to different html pages (in this case
// we only have one.)

const path = require("path");

// Routes
// ==========================================================
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index", burgerObj);   // render the index page
  });
};
