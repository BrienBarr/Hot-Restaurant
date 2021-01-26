const path = require("path");
const PORT = 5500;
const express = require("express");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [];

var waitList = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/api/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("api/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });


app.listen(PORT, function(){
    console.log("app listening on PORT:" + PORT);
});