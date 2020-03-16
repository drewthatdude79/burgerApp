const express = require('express');
const exphb = require('express-handlebars');
const mysql = require('mysql');

const app = express();
const app = exphb();
const app = mysql();

const PORT = 8080;

app.get("/", function(req, res) {
  res.send("Eat that burger up!");
});
