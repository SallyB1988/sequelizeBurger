// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Requiring our Burger model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // get all of the burgers
  app.get("/api/burgers/", function(req, res) {
    db.Burger.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // get a single burger
  app.get("/api/burgers/:id", function(req, res) {
    db.Burger.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbBurger) {
        res.json(dbBurger);
      });
  });

  // create a new burger
  app.post("/api/burgers", function(req, res) {
    console.log(req.body);
    db.Burger.create({
      name: req.body.name,
      bun: req.body.bun,
      cheese: req.body.cheese,
      burger_type: req.body.burger_type,
      eaten: req.body.eaten
    })
      .then(function(dbBurger) {
        res.json({id: dbBurger.insertId});
      });
  });

  // update an existing burger
  app.put("/api/burgers/:id", function(req, res) {
    console.log(req.body);
    db.Burger.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function(dbBurger) {
        if(dbBurger.changedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();
      });
  });

};
