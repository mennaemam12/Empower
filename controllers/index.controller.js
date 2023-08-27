const express = require('express')
const router = express.Router()
const Job = require('../models/jobs.schema.js');

const getIndex=async function (req, res) {
    var Jobs;

    Jobs=await Job.find();
    res.render("index",{jobs:Jobs});
  };

  const getJobDetails = async(req, res) => {
      var jobDetails= await Job.findById(req.params.id);
      res.render('job-detail', {jobDetails});
    };  
  module.exports={getIndex,getJobDetails};