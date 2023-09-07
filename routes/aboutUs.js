const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());
const Job = require('../models/jobs.schema.js');
const Users=require('../models/User.schema.js')

router.get('/', async(req,res)=>
{
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
    res.render('about',{notificationMessages});
})

module.exports = router;