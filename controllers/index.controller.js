const express = require('express')
const router = express.Router()
const Job = require('../models/jobs.schema.js');
const Users=require('../models/User.schema.js')
const notificationController = require('./nav.controller.js');
const getIndex=async function (req, res) {
  const notificationMessages = [];
  if (req.session && req.session.email) {
    const getuser = req.session.email;
    const getprofile = await Users.findOne({ email: getuser }).exec();
    const acceptedCvArray = getprofile.acceptedCV;
  
    // Define notificationMessages as an empty array
   
  
    for (const jobId of acceptedCvArray) {
      const job = await Job.findOne({ _id: jobId }).exec();
  
      if (job) {
        // Create a notification message based on job details
        const notificationMessage = `Congratulations! Your CV Has Been Approved By The HR for the Title: ${job.Name} at ${job.Company}.`;
  
        // Push the message to the notificationMessages array
        notificationMessages.push(notificationMessage);
      }
    }
  
  };
    var Jobs;
    Jobs=await Job.find();
    res.render("index",{jobs:Jobs,notificationMessages});
  };

  const getJobDetails = async(req, res) => {
    const notificationMessages = [];
    if (req.session && req.session.email) {
      const getuser = req.session.email;
      const getprofile = await Users.findOne({ email: getuser }).exec();
      const acceptedCvArray = getprofile.acceptedCV;
    
      // Define notificationMessages as an empty array
     
    
      for (const jobId of acceptedCvArray) {
        const job = await Job.findOne({ _id: jobId }).exec();
    
        if (job) {
          // Create a notification message based on job details
          const notificationMessage = `Congratulations! Your CV Has Been Approved By The HR for the Title: ${job.Name} at ${job.Company}.`;
    
          // Push the message to the notificationMessages array
          notificationMessages.push(notificationMessage);
        }
      }
    
    };
      var jobDetails= await Job.findById(req.params.id);
      const appliedJobIdsFromDatabase  = await Users.find({ email: req.session.email }, 'Appliedjobs');
      res.render('job-detail', {
        jobDetails,
        appliedJobIdsFromServer: appliedJobIdsFromDatabase,
        notificationMessages
      });
    };  
  module.exports={getIndex,getJobDetails};