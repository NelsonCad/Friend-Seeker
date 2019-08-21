// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "questions"));
});

app.get("*", function (req,res) {
    res.sendFile(path.join(__dirname, "index"))
})

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });