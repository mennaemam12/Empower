const express = require('express')
const router = express.Router()
const Job = require('../models/jobs.schema.js');

var clearbit = require('clearbit')('sk_9f9eb9439f54c96625353f73d63320e0')


const getIndex=async function (req, res) {
    var Jobs;
    var logos;
    var Company = clearbit.Company;

    Jobs=await Job.find();
    console.log(Jobs);
    Jobs.forEach(job=>
      {
         Company.find({name: job.Company})
        .then(function (company) {
          logos.add(company.logo)
        })
        .catch(Company.QueuedError, function (err) {
          // Company lookup queued - try again later
        })
        .catch(Company.NotFoundError, function (err) {
          // Company could not be found
          console.log(err);
        })
        .catch(function (err) {
          console.error(err);
        });
        
      })
  
    // Jobs.forEach(job=>{
    //     logo.image(job.Company+'.com',  {size: 60, greyscale: true}).then((logoURL) => {
    //       console.log(logoURL);
    //       logos.add(logoURL);
    //     });
    // })
    
    res.render("index",{jobs:Jobs,logos:logos});
  };

  module.exports={getIndex};