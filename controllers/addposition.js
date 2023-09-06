const Router=require('express');
const router=Router();
const fileUpload = require('express-fileupload');
const mongoose=require('mongoose');
const path = require('path');

const user = require('../models/User.schema');
const jobs = require('../models/jobs.schema');
const bcrypt = require('bcrypt');



let addposition= async (req,res)=>
{
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
      let Companylogo12 = req.files.imageFile;
      let Company=req.body.CompanyName;
      let Location=req.body.loc;
      let Name = req.body.title;
      let Salary = req.body.Salary;
      let Description = req.body.description;
      let Skills = req.body.skills;
      let Place = req.body.work_models;
      let Disability = req.body.Disability;
      let Position = req.body.position_need;
      let Companylogo=Companylogo12.name
      jobs.create({Companylogo,Company,Location,Name,Salary
      ,Description,Skills,Place,Disability,Position});

      const uploadPath = path.join(__dirname, '../public/img/',Companylogo);
      Companylogo12.mv(uploadPath, (error) => {
        if (error) {
          console.error(error);
          return res.status(500).send('Failed to move one or more files');
        }
      });
      res.send('success');



}
module.exports=addposition;