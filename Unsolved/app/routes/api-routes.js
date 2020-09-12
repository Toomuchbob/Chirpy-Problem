// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const Sequelize = require('sequelize');
const sequelize = require("../config/connection.js");

const Chirp = sequelize.define('chirp', {
  author: Sequelize.STRING,
  body: Sequelize.STRING,
  created_at: Sequelize.DATE
}, {
  timestamps: false
});

// Syncs with DB
Chirp.sync();

// Routes
// =============================================================
module.exports = function (app) {

  // Get all chirps
  app.get("/api/all", function (req, res) {

    Chirp.findAll({}).then(function (results) {
      res.json(results);
    });

  });

  // Add a chirp
  app.post("/api/new", function (req, res) {

    console.log("Chirp Data:");
    console.log(req.body);

    Chirp.create({
      author: req.body.author,
      body: req.body.body,
      created_at: req.body.created_at
    }).then(function (results) {
      // `results` here would be the newly created chirp
      res.end();
    });
  });

};
