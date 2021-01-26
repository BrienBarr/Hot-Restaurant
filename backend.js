const path = require("path");
const PORT = 5500;
const express = require("express");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [];

var waitList = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(tables);
})

app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
})


app.post("/api/tables", function (req, res) {
if (tables.length==5){
    var newWaitList = req.body;
    console.log(newWaitList);
    waitList.push(newWaitList);
    res.json(newWaitList);
} else{
    var newTable = req.body;
    console.log(newTable);
    tables.push(newTable);
    res.json(newTable);
}});





app.listen(PORT, function () {
    console.log("app listening on PORT:" + PORT);
});