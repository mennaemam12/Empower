
const path = require('path');
const pdf = require('pdf-parse');
const fs = require('fs');

const Job = require('../models/jobs.schema.js');
const Users=require('../models/User.schema.js')

const getUploadResume=async function (req, res) {
    res.render("uploadResume",{email:(req.session.authenticated)?req.session.email:""});
};


const saveResume=async function (req, res){
    console.log('File uploaded:', req.file);
    console.log('File uploaded successfully');
    res.render("uploadResume",{email:(req.session.authenticated)?req.session.email:""});
}

const filterJobs=async function (req, res){
    console.log(req.Path);
    const filePath ="public"+ req.body.Path;
    try {
        const usersWithAppliedJobs = await Users.find({}, 'Appliedjobs');
        const appliedJobIds = usersWithAppliedJobs.flatMap(user => user.Appliedjobs);
        const dataBuffer = await pdf(fs.readFileSync(filePath));
        const pdfText = dataBuffer.text;
        
        
        
        //var jobs=Jobs.toArray();
        const words = pdfText.toLowerCase().split(/\s+/);
        await Job.find()
        .then((data)=>{
        const sortedData =data.map(job => {
            const keywords=job.Skills;
            const matchingCount = keywords.reduce((total,sentence ) => {
                return total + calculateMatchingWordCount(sentence, words);
              }, 0);
            if(matchingCount!=0){
                return { job, matchingCount };
            }
          }).sort((a, b) => b.matchingCount - a.matchingCount);
          res.send({ success: true, sortedData: sortedData, Applied: appliedJobIds });
        })

    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while processing the PDF.');
    }
}

function calculateMatchingWordCount(sentence, words) {
     const sentenceWords = sentence.toLowerCase().split(/\s+/);
    const matchingCount = sentenceWords.filter(word => words.includes(word)).length;
    return matchingCount;
  }


  module.exports={getUploadResume,saveResume,filterJobs};