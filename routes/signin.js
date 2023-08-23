const Router=require('express');
const router=Router();
const registration=require("../controllers/registration.controller.js")
const session = require('express-session');
const mongoose=require('mongoose');
const bodyparser=require('body-parser'); 
const user = require('../models/User.schema.js');
router.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
  }));


  router.get('/',(req,res)=>
  {
      res.render('reg')
  })


router.post('/',registration);
module.exports = router;