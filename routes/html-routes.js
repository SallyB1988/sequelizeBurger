// html-routes.js routes for sending users to different html pages (in this case
// we only have one.)
var db = require("../models");

// Routes
// ==========================================================
module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burger.findAll({})
    .then(function(dbBurger) {
      res.render("index", {burgers: dbBurger});   // render the index page
    });
})
};
