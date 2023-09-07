const Router=require('express');
const router=Router();
const registration=require("../controllers/registration.controller.js")
const session = require('express-session');
const mongoose=require('mongoose');
const bodyparser=require('body-parser'); 
const Users = require('../models/User.schema.js');
const Job = require('../models/jobs.schema.js');
router.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
  }));


  router.get('/', async (req,res)=>
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
      res.render('reg',{notificationMessages})
  })


router.post('/',registration);
module.exports = router;