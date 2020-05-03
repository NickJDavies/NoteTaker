// Dependencies
const express = require("express");
const path = require("path");

// local dependencies
const notes = require("../../../db/db.json")

// Sets up the Express App
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES 
// ======================================
// // // Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.js"));
  });
// ======================================

// API ROUTES
// ======================================
app.get("/api/notes", function(req, res) {
    return res.notes
  });
// ======================================

// Starts the server to begin listening
// ======================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// ======================================