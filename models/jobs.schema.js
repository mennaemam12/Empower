const express = require('express')
const app = express()
const mongoose = require('mongoose');
const validator=require('validator');

const Schema = mongoose.Schema;
app.use(express.urlencoded({extended:true}));

const jobSchema = new Schema ({
    Name:{
        type:String,
        trim:true,
        required:[true,'Name is required'],
    },
    Description:{
        type:String,
        required:[true,'Description is required'],
        trim:true
    },
    Disability:{
        type:String,
        required:[true,'Disability is required'],
        trim:true

    },
    Company:{
        type:String,
        required:[true,'Company is required'],
        trim:true
    },
    Location:{
        type:String,
        required:[true,'Location is required'],
        trim:true
    },
    Place:{
        type:String,
        required:[true,'Work place is required'],
        trim:true
    },
    Salary:{
        type:String,
        required:[true,'Salary is required'],
        trim:true
    },
    Skills:{
        type:Array,
        required:[true,'skills are required'],
        trim:true
    },
    Position:{
        type:String,
        required:[true,'Position is required'],
        trim:true
    }

},{timestamp:true});

const jobs= mongoose.model('jobs',jobSchema);
module.exports=jobs;