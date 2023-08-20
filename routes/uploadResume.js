const multer = require('multer');
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const path = require('path');
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
      cb(null, file.fieldname + '-' + uniqueSuffix + extension);
    }
  });
  const upload = multer({ storage: storage });

router.post('/',(req, res, next) => {
    console.log('Reached the upload route');
    next();}, upload.single('resume'),uploadController.saveResume);

module.exports = router;