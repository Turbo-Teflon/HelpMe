"use strict";
require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

console.log("port :" + port);

// EJS
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("public"));

