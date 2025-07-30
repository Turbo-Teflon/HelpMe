"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
let path = require('path');

const port = process.env.PORT;

console.log("port :" + port);

// EJS
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.render("liste-tickets");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
