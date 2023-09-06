const Router=require('express');
const router=Router();
const fileUpload = require('express-fileupload');
const mongoose=require('mongoose');
const user = require('../models/User.schema');
const jobs = require('../models/jobs.schema');
const bcrypt = require('bcrypt');



let addposition= async (req,res)=>
{
    let imageFiles = req.files.imageFile;
   console.log(imageFiles);
}
module.exports=addposition;