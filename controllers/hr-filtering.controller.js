const Job = require('../models/jobs.schema.js')

const filter=async function(req,res){
    if(req.data.filterJob){
        const query = {};
        query[Company] = req.data.job;
        const companies=await Job.find(query);
        console.log(companies);
        res.send(companies);
    }
    else{
        const query = {};
        query[Name] = req.data.company;
        const jobs=await Job.find(query);
        console.log(jobs);
        res.send(jobs);
    }
}

module.exports={filter}