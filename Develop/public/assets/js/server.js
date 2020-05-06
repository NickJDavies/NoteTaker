// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// local dependencies
const notes = require("../../../db/db.json")

// Sets up the Express App
const app = express();

var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const publicPath = path.join(__dirname, "../../../public");
app.use(express.static(publicPath));

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
    const data = fs.readFileSync(jsonpath, "utf8");
    return res.send(data);
});
// ======================================

// DELETE functions
// ======================================
app.delete("/api/notes/:id", function (req, res) {
    const dbjsonpath = path.join(__dirname, "../../../db/db.json")
    // reads the file
    let jsonDB = fs.readFileSync(dbjsonpath, "utf8")
    DB = JSON.parse(jsonDB);
    DB.splice(req.params.id, 1);
    // IDs everything in the array
    let ID = 0;
    for(i = 0; i < DB.length; i++) {
        DB[i].id = ID;
        ID++
    }
    fs.writeFileSync(dbjsonpath, JSON.stringify(DB));
});
// ======================================
// POST functions
// ======================================
app.post("/api/clear", function(req, res) {
    let data = fs.readFileSync(jsonpath, "utf8");
    console.log(req);
});
app.post("/api/notes", function(req, res) {
    const dbjsonpath = path.join(__dirname, "../../../db/db.json")
    // reads the file
    let jsonDB = fs.readFileSync(dbjsonpath, "utf8")
    DB = JSON.parse(jsonDB);
    //appends the title, and the text
    DB.push(req.body);
    // IDs everything in the array
    let ID = 0;
    for(i = 0; i < DB.length; i++) {
        DB[i].id = ID;
        ID++
    }
    fs.writeFileSync(dbjsonpath, JSON.stringify(DB));
})
// ======================================

// Starts the server to begin listening
// ======================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
// ======================================