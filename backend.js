const path = require("path");
const PORT = 5500;
const express = require("express");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [];

var waitList = [];


app.listen(PORT, function(){
    console.log("app listening on PORT:" + PORT);
});