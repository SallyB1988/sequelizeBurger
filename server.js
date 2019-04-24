// express initialization ==================================
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

// Requiring our models for syncing
const db = require("./models");

// Set up Express app to handle data parsing
app.use(express.static("public"));  // folder for all static content
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars initialization ===============================
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");    // SALLY -- not sure what this is doing

// Routes ===================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Sync the serialize models and then starting Express app
// =======================================================
db.sequelize.sync({}).then(function() {
  app.listen(PORT, () => {
    console.log('App now listening at localhost: ' + PORT);
  });
})