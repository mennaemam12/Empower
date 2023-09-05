const Job = require('../models/jobs.schema.js')
const Users=require('../models/User.schema.js')
const path = require('path');
const pdf = require('pdf-parse');
const fs = require('fs');

const select=async function(req,res){
    const jobs=await Job.find();
    if(req.body.filterJob=="true"){
        var companies=[];
        jobs.forEach(job=>{
           if(job.Name.includes(req.body.job)){
            companies.push(job.Company);
           }
        })
        console.log(companies);
        res.send(companies);
    }
    else {
        var Jobs=[];
        jobs.forEach(job=>{
           if(job.Company.includes(req.body.company)){
            Jobs.push(job.Name);
           }
        })
        console.log(Jobs);
        res.send(Jobs);
    }
}

const filter=async function(req,res){
    const jobs=await Job.find();
    const users=await Users.find()
    var jobid="";
    var chosenJob="";
    jobs.forEach(job=>{
        if(job.Name.includes(req.body.job) && job.Company.includes(req.body.company)){
            jobid=job._id;
            chosenJob=job;
        }
    })
    console.log("jobid:  "+jobid);
    const sortedData =await Promise.all(users.map(async user => {
        if(user.Appliedjobs.includes(jobid)){

            const fileName=user.email.substring(0, user.email.indexOf("@"));
            const filePath = `public/uploads/${fileName} resume.pdf`; 
            const dataBuffer = await pdf(fs.readFileSync(filePath));
            const pdfText = dataBuffer.text;
            const words = pdfText.toLowerCase().split(/\s+/);

            const userDisability=user.accessibilityValue.toLowerCase();
            var userPosition;
            
            
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
          

            const jobDisabilities = chosenJob.Disability.toLowerCase();
            const jobPosition = chosenJob.Position.toLowerCase();
    
            const matchingDisabilities = jobDisabilities.includes(userDisability) ? 1 : 0;
            const matchingPosition = (jobPosition === userPosition)? 1 : 0;
            const keywords=chosenJob.Skills;

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
              return {user, matchingScore: totalMatchingScore };
        }
        }))
       
      

        const filteredSortedData = sortedData.filter(data => data);
        filteredSortedData.sort((a, b) => b.matchingCount - a.matchingCount);
        res.render("dashboard",{jobs:jobs,sortedData:filteredSortedData,job:chosenJob});
            
}
    


function calculateMatchingWordCount(sentence, words) {
    const sentenceWords = sentence.toLowerCase().split(/\s+/);
   const matchingCount = sentenceWords.filter(word => words.includes(word)).length;
   return matchingCount;
}

const acceptApplicant=async function(req,res){
      const user= await Users.findById(req.body.user);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      if (user.acceptedCV.includes(req.body.job)) {
        return res.status(400).json({ error: 'Cv already accepted' });
      }
      user.acceptedCV.push(req.params.job);
      await user.save();
      res.send("success")
}

module.exports={select,filter,acceptApplicant}