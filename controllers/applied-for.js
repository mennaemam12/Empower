const express = require('express')
const router = express.Router()
const Job = require('../models/jobs.schema.js');
const User=require('../models/User.schema.js');
 
const getapplied= async (req,res)=>
{
    const Applied= await User.find({}, 'Appliedjobs').where('_id').equals(req.session.user._id);
    const appliedJobIds = Applied.flatMap(user => user.Appliedjobs);
    const getjobs = await Job.find().where('_id').equals(appliedJobIds);
    res.render("applied-for",{getjobs});
}
module.exports={getapplied};