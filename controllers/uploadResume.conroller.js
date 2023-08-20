const express = require('express')

const Job = require('../models/jobs.schema.js');


const getUploadResume=async function (req, res) {

    res.render("uploadResume");
};


const saveResume=async function (req, res){
    console.log('File uploaded:', req.file);
    console.log('File uploaded successfully');
    res.render("uploadResume");
}

  module.exports={getUploadResume,saveResume};