const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Job = require('../models/jobs.schema.js')
const filtering=require('../controllers/hr-filtering.controller');
router.use(bodyParser.json());

router.get("/",async (req,res)=>{
    const jobs=await Job.find();
    res.render("dashboard",{jobs:jobs,sortedData:"",job:"",company:""});
})

router.post("/select",filtering.select);
router.post("/",filtering.filter);



module.exports = router;