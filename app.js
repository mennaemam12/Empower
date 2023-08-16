const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger=require("morgan");

const indexRoute = require("./routes/indexRoute.js");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("public"));

app.set("view engine", "ejs");
let path = require("path");
app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public"))); //All static assets in the public folder

const cors = require("cors");
app.use(cors({ origin: true }));

app.use("/", indexRoute);

module.exports= app;