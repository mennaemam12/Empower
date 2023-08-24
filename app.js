const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger=require("morgan");
const mongoose=require("mongoose")
const path = require('path');
const session = require("express-session");

const indexRoute = require("./routes/indexRoute.js");
const uploadResumeRoute = require("./routes/uploadResume.js");
const reg = require("./routes/reg.js");



app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(
  session({
    name: `daffyduck`,
    secret: "session",
    resave: false,
    saveUninitialized: false,
  })
);

app.set("view engine", "ejs");
app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public"))); //All static assets in the public folder

const dburl =
  "mongodb+srv://Menna:Empower123@database.z3i1hgm.mongodb.net/EmPower?retryWrites=true&w=majority";
mongoose
  .connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log(err));

const cors = require("cors");
app.use(cors({ origin: true }));

app.use("/", indexRoute);
app.use("/uploadResume",uploadResumeRoute);
app.use("/reg",reg);

module.exports= app;