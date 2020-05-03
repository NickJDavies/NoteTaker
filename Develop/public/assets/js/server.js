// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

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
    res.sendFile(path.join(__dirname, "../../index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../../notes.html"));
});
// ======================================

// API ROUTES
// ======================================
app.get("/api/notes", function(req, res) {
    const jsonpath = path.join(__dirname, "../../../db/db.json");
    console.log(jsonpath);
    const data = fs.readFileSync(jsonpath, "utf8");
    return res.send(data);
});
// ======================================

// Starts the server to begin listening
// ======================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
// ======================================