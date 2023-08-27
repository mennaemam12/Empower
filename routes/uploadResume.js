const multer = require('multer');
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');
const uploadController=require('../controllers/uploadResume.conroller.js');

router.use(bodyParser.json());

router.get("/",uploadController.getUploadResume);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/'); // Specify the folder where you want to save the files
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const extension = path.extname(file.originalname);
      cb(null,req.session.email.substring(0, req.session.email.indexOf("@"))+" resume"  + extension);

      //file.fieldname + '-' + uniqueSuffix
    }
  });
  const upload = multer({ storage: storage });

router.post('/',(req, res, next) => {
    console.log('Reached the upload route');
    next();}, upload.single('resume'),uploadController.saveResume);

router.post('/filter',uploadController.filterJobs)
<<<<<<< HEAD
=======

router.post('/edit',async(req,res)=>{
      
  
      const oldPdfPath = path.join(__dirname,'../public/uploads', req.session.email.substring(0, req.session.email.indexOf("@"))+" resume"+'.pdf');
       console.log(oldPdfPath);
      fs.unlink(oldPdfPath, (err) => {
        if (err && err.code !== 'ENOENT') {
          console.error('Error deleting old PDF:', err);
        }

        // Upload the new PDF
        const up=upload.single('newResume');
        up(req, res, (err) => {
          if (err) {
            console.error('Error uploading new PDF:', err);
            return;
          }
        upload.single('newResume');
          res.redirect('/uploadResume'); // Redirect to a success page or wherever needed
        });
      });
})

>>>>>>> 24e30e5f0cfd23bb7fd3e52d7c63bac28b7ae7f8
module.exports = router;