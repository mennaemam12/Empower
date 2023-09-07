const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const Users = require('../models/User.schema.js');
const Job = require('../models/jobs.schema.js');
const upload = multer({ dest: path.join(__dirname, "..", "public", "uploads") });
router.use(bodyParser.json());
const fs = require('fs').promises; // Import the 'promises' version of the 'fs' module.
const profile=require("../controllers/myprofile.controller")
router.get('/', async (req, res) => {
  const notificationMessages = [];
  if (req.session && req.session.email) {
    const getuser1 = req.session.email;
    const getprofile1 = await Users.findOne({ email: getuser1 }).exec();
    const acceptedCvArray = getprofile1.acceptedCV;
  
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
  }
    const getuser = req.session.email;
    const getprofile = await Users.find({ email: getuser });
    console.log(getprofile);
    res.render('profile', {getprofile,notificationMessages});
  });

  router.post('/', upload.array('files', 10), async (req, res) => {
    const getuser = req.session.email;
    const getprofile = await Users.findOne({ email: getuser });
    const uploadedFiles = req.files.map(file => ({
      filename: file.filename,
      originalname: file.originalname,
      path: file.path, // Add 'path' property to the file object
    }));
    const urls = [];
  
    for (const file of uploadedFiles) {
      // Rename the image with the user name and its extension.
      const newFilename = `${getuser}-${file.originalname}`;
      const filePath = path.join(__dirname, "..", "public", "uploads", newFilename);
  
      console.log("New Filename:", newFilename);
      console.log("File Path:", filePath);
  
      try {
        // Use fs.promises.rename with the 'path' property to rename the file.
        await fs.rename(file.path, filePath);
        urls.push(newFilename);
      } catch (err) {
        console.error(err);
      }
    }
  
    // Update the user profile with the new Urls array.
    getprofile.Urls = [...getprofile.Urls, ...urls];
    await getprofile.save();
  
    res.redirect('/myprofile');
  });
  router.post('/national', upload.array('nationalIdFiles', 10), async (req, res) => {
    const getuser = req.session.email;
    const getprofile = await Users.findOne({ email: getuser });
    const uploadedFiles = req.files.map(file => ({
      filename: file.filename,
      originalname: file.originalname,
      path: file.path, // Add 'path' property to the file object
    }));
    const nationalID = [];
  
    for (const file of uploadedFiles) {
      // Rename the image with the user name and its extension.
      const newFilename = `${getuser}-${file.originalname}`;
      const filePath = path.join(__dirname, "..", "public", "uploads", newFilename);
  
      console.log("New Filename:", newFilename);
      console.log("File Path:", filePath);
  
      try {
        // Use fs.promises.rename with the 'path' property to rename the file.
        await fs.rename(file.path, filePath);
        nationalID.push(newFilename);
      } catch (err) {
        console.error(err);
      }
    }
  
    // Update the user profile with the new Urls array.
    getprofile.NationalID = [...getprofile.NationalID, ...nationalID];
    await getprofile.save();
  
    res.redirect('/myprofile');
  });
  router.post("/update",profile.updateprofile);
  router.post("/addskill",profile.newskill);
  
module.exports = router;