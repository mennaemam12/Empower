const express = require('express')
const router = express.Router()
const Job = require('../models/jobs.schema.js');
const User=require('../models/User.schema.js');
 
const getapplied= async (req,res)=>
{
    const notificationMessages = [];
    if (req.session && req.session.email) {
      const getuser = req.session.email;
      const getprofile = await User.findOne({ email: getuser }).exec();
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
    const Applied= await User.find({}, 'Appliedjobs').where('_id').equals(req.session.user._id);
    const appliedJobIds = Applied.flatMap(user => user.Appliedjobs);
    const getjobs = await Job.find().where('_id').equals(appliedJobIds);
    res.render("applied-for",{getjobs,notificationMessages});
}
const getstatus= async (req,res)=>{
    const ajaxids1=req.body.ids;
    const ajaxids2=req.body.ids2
    const getuser = req.session.email;
    const getprofile = await User.findOne({ email: getuser }).exec();
    const acceptedCvArray = getprofile.acceptedCV;
    const acceptedJob= getprofile.acceptedJob
    const commonElements = ajaxids1.filter((ajaxId) =>
    acceptedCvArray.includes(ajaxId));
    const commonJob = ajaxids2.filter((ajaxId) =>
    acceptedJob.includes(ajaxId)

);


console.log('Common Elements:', commonElements);

// Now you can send the commonElements array as a response to the AJAX request
res.json({ commonElements,commonJob });

    
}
module.exports={getapplied,getstatus};