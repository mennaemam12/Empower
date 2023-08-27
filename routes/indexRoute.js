const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const indexController=require('../controllers/index.controller.js');
const getjob=require('../controllers/job-detail.controller');
router.use(bodyParser.json());

router.get("/",indexController.getIndex);


router.get("/job-detail/:id", indexController.getJobDetails);
router.post("/job-detail/:id", getjob.btnId);


module.exports = router;