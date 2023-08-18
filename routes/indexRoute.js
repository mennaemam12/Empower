const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const indexController=require('../controllers/index.controller.js');

router.use(bodyParser.json());

router.get("/",indexController.getIndex);

module.exports = router;