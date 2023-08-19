const express = require('express')
const router = express.Router()
const Job = require('../models/jobs.schema.js');

const getIndex=async function (req, res) {
    var Jobs;
    var logo;

    Jobs=await Job.find();
    console.log(Jobs);

    
    res.render("index",{jobs:Jobs});
  };

  module.exports={getIndex};