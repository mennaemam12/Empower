const express = require('express')
const app = express()
const mongoose = require('mongoose');
const validator=require('validator');

const Schema = mongoose.Schema;
app.use(express.urlencoded({extended:true}));

const UserSchema = new Schema ({
    Firstname:{
        type:String,
        trim:true,
        required:[true,'Name is required'],
    },
    Lastname:{
        type:String,
        required:[true,'name is required'],
        trim:true
    },
    email:{
        type:String,
        required:[true,'email is required'],
        trim:true

    },
    pass:{
        type:String,
        required:[true,'pass is required'],
        trim:true
    },
    Phone:{
        type:String,
        trim:true
    },
    Bio:{
        type:String,
        trim:true
    },
    accessibilityValue:{
        type:String,
        required:[true,'disabilities are required'],
        trim:true
    },
    Skills:{
        type:Array,
        trim:true
    },
    Urls:{
        type:Array,
        trim:true   
    },
    NationalID:{
        type:Array,
        trim:true
    },
    Appliedjobs:{
        type:Array,
        trim:true
    },
    HRmessage:{
        type:String,
        trim:true
    },
    acceptedCV:{
        type:Array,
        trim:true
    }
},{timestamp:true});

const jobs= mongoose.model('User',UserSchema);
module.exports=jobs;