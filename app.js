const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger=require("morgan");
const mongoose=require("mongoose")

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

const dburl =
  "mongodb+srv://Menna:Empower123@database.z3i1hgm.mongodb.net/Empower?retryWrites=true&w=majority";
mongoose
  .connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log(err));

const cors = require("cors");
app.use(cors({ origin: true }));

app.use("/", indexRoute);

module.exports= app;