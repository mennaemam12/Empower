const express = require('express')
const app = express()
const mongoose = require('mongoose');
const validator=require('validator');

const Schema = mongoose.Schema;
app.use(express.urlencoded({extended:true}));

const UserSchema = new Schema ({
    FirstName:{
        type:String,
        trim:true,
        required:[true,'Name is required'],
    },
    LastName:{
        type:String,
        required:[true,'Description is required'],
        trim:true
    },
    Email:{
        type:String,
        required:[true,'Disability is required'],
        trim:true

    },
    Password:{
        type:String,
        required:[true,'Company is required'],
        trim:true
    },
    Skills:{
        type:Array,
        required:[true,'skills are required'],
        trim:true
    },
    CvURL:{
        type:String,
        required:[true,'Work place is required'],
        trim:true
    },
},{timestamp:true});

const jobs= mongoose.model('User',UserSchema);
module.exports=jobs;