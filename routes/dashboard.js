const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Job = require('../models/jobs.schema.js')
router.use(bodyParser.json());

router.get("/",async (req,res)=>{
    const jobs=await Job.find();
    res.render("dashboard",{jobs});
})

router.post("/select",)

module.exports = router;