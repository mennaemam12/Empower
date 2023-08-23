const Router=require('express');
const router=Router();
const session = require('express-session');
const mongoose=require('mongoose');
const user = require('../models/User.schema');
const bcrypt = require('bcrypt');
router.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
  }));

let errornum=3;
let registration= async (req,res)=>
{
    let{Firstname,Lastname,email,pass1,accessibilityValue,page}=req.body;
    let{inemail,inpass,page1}=req.body;
    if(page=="signup")
    {
        let user2=await user.find().where("email").equals(email);
        console.log(user2);
        if(user2.length==0)
        {
                      
            const pass= await bcrypt.hash(pass1, 10);
            user.create({Firstname,Lastname,email,pass,accessibilityValue});
             res.send({result:"success",Email:email});
             req.session.email =email;
             req.session.save();
        }
        else
        {
            res.send({error2:"Email is already taken"});
        }
    }
    else if(page1=="signin")
    {
        let user1=await user.find().where('email').equals(inemail);
        let result=false;
        if(user1.length>0)
        {
         result=await bcrypt.compare(inpass, user1[0].pass);
        }
      
        
        if(user1.length==0)
        {
            res.send({error1:"Email is incorrect",error2:"Password is incorrect"});
        }
        else
        {
             res.send({success:"success",email:user1[0].email});
             req.session.email = user1[0].email;
             req.session.save();
        }
    }
   
}
module.exports=registration;