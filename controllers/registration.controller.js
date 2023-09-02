const Router=require('express');
const router=Router();
const mongoose=require('mongoose');
const user = require('../models/User.schema');
const bcrypt = require('bcrypt');


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
             req.session.email =email;
             let user1=await user.find().where('email').equals(email);
             req.session.user=user1[0];
             req.session.authenticated=true;
             req.session.save();
             res.send({result:"success",Email:email});
        }
        else
        {
            res.send({error2:"Email is already taken"});
        }
    }
    else if(page1=="signin")
    {
        if(inemail=="admin@gmail.com"&&inpass=="123")
        {
            res.send({success:"admin"});
        }
        else
        {        
        let user1=await user.find().where('email').equals(inemail);
        let result=false;
        if(user1.length>0)
        {
         result=await bcrypt.compare(inpass, user1[0].pass);
        }
        if(user1.length==0||result==false)
        {
            res.send({error1:"Email is incorrect",error2:"Password is incorrect"});
        }
        else
        {
             req.session.email = user1[0].email;
             req.session.user=user1[0];
             req.session.authenticated=true;
             req.session.save();
             res.send({success:"success",email:user1[0].email});
        }
        }
    }
   
}
module.exports=registration;