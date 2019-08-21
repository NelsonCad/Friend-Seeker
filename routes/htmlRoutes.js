const path = require("path");


app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "questions"));
});

app.get("*", function (req,res) {
    res.sendFile(path.join(__dirname, "index"))
})