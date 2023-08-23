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
    let{Firstname,Lastname,email,pass,accessibilityValue,page}=req.body;
    // let{username_in,pass_in,page1}=req.body;
    if(page=="signup")
    {
        let user2=await user.find().where("email").equals(email);
        console.log(user2);
        if(user2.length==0)
        {
                      
            const pass1= await bcrypt.hash(pass, 10);
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
    // else if(page1=="signin")
    // {
    //   let user1=await user.find().where('username').equals(username_in);
    //     let result=false;
    //     if(user1.length>0)
    //     {
    //      result=await bcrypt.compare(pass_in, user1[0].pass);
    //     }
      
        
    //     if(user1.length==0||!result)
    //     {
    //       errornum--;
    //       if(errornum==0)
    //       {
    //         res.send({error1:"Username is incorrect",error2:"Password is incorrect",num:0});
    //         errornum=3;
    //       }
    //       else
    //       {
    //         res.send({error1:"Username is incorrect",error2:"Password is incorrect",num:3});
    //       }
            
    //     }
    //     else
    //     {
    //          sharedusername=username;
    //          res.send({success:"success",Role:user1[0].Role,UserName:user1[0].username,
    //          Email1:user1[0].email,Phone:user1[0].phone,Pending:user1[0].Pending});
    //          req.session.username = user1[0].username;
    //          req.session.save();
    //     }
    // }
   
}
module.exports=registration;