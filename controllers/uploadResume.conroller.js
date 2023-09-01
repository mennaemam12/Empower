
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
        const usersWithAppliedJobs = await Users.find({}, 'Appliedjobs').where('email').equals(req.session.email)
        const appliedJobIds = usersWithAppliedJobs.flatMap(user => user.Appliedjobs);
        console.log(appliedJobIds);
        const dataBuffer = await pdf(fs.readFileSync(filePath));
        const pdfText = dataBuffer.text;
        
        const userDisability=req.session.user.accessibilityValue.toLowerCase();
        var userPosition;

        const words = pdfText.toLowerCase().split(/\s+/);

        const seniorPositionKeywords = [
            'manager', 'director', 'supervisor', 'leader', 'head',
            'chief', 'executive', 'president', 'vice president'
          ];
          const juniorPositionKeywords=[
            'junior','entry-level','trainee','intern','assistant','associate','coordinator',
            'analyst','apprentice','graduate'
          ];
          const managerPositions = seniorPositionKeywords.filter(keyword =>
            pdfText.toLowerCase().includes(keyword)
          );
          const juniorPositions = juniorPositionKeywords.filter(keyword =>
            pdfText.toLowerCase().includes(keyword)
          );
          if(managerPositions.length>juniorPositions.length){
               userPosition="senior";  
          }
          else{
               userPosition="junior";
          }
          
        await Job.find()
        .then(data=>{
            const filteredAndSortedData = data.map(job => {
                const jobDisabilities = job.Disability.toLowerCase();
                const jobPosition = job.Position.toLowerCase();
    
                const matchingDisabilities = jobDisabilities.includes(userDisability) ? 1 : 0;
                const matchingPosition = (jobPosition === userPosition)? 1 : 0;
            
                const keywords=job.Skills;
                const matchingCount = keywords.reduce((total,sentence ) => {
                    return total + calculateMatchingWordCount(sentence, words);
                  }, 0);
                 
                var matching;

                  if(matchingCount>30)
                    matching=5;
                  else if(matchingCount>20)
                    matching=4
                  else if(matchingCount>10)
                    matching=3;
                  else if(matchingCount==0)
                    matching=0;
                  else
                    matching=1;
            
                  const totalMatchingScore = matchingDisabilities * 20 + matchingPosition * 10 + matching;
                  return { job, matchingScore: totalMatchingScore };
                
              })
              .filter(job => job.matchingScore > 0)
              .sort((a, b) => b.matchingScore - a.matchingScore);
              console.log(filteredAndSortedData);
              res.send({ success: true, sortedData: filteredAndSortedData , Applied: appliedJobIds });
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