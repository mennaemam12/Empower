const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const multer = require('multer');
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });
const fileUpload = require('express-fileupload');
const mongoose=require('mongoose');
const path = require('path');
router.use(fileUpload());
const addposition=require("../controllers/addposition");


router.get('/',(req,res)=>
{
    res.render('addposition')
})
router.post('/',addposition);
module.exports = router;