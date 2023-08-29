const express = require('express')
const router = express.Router()
const Job = require('../models/jobs.schema.js');
const Users=require('../models/User.schema.js')
const getIndex=async function (req, res) {
    var Jobs;
    Jobs=await Job.find();
    res.render("index",{jobs:Jobs});
  };

  const getJobDetails = async(req, res) => {
      var jobDetails= await Job.findById(req.params.id);
      const appliedJobIdsFromDatabase  = await Users.find({ email: req.session.email }, 'Appliedjobs');
      // Render the page and pass the applied job IDs to the view
      res.render('job-detail', {
        jobDetails,
        appliedJobIdsFromServer: appliedJobIdsFromDatabase,
        // ... other data you might need to render the page
      });
    };  
  module.exports={getIndex,getJobDetails};