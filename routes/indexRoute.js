const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.get("/", async function (req, res) {

  res.render("uploadResume");
});

module.exports = router;