const Job = require('../models/jobs.schema.js')
const Users=require('../models/User.schema.js')

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
        if(job.Name===req.body.job && job.Company===req.body.company){
            jobid=job._id;
            chosenJob=job;
        }
    })

    const sortedData =users.map(async user => {
        const fileName=user.email.innerHTML.substring(0, user.email.innerHTML.indexOf("@"));
        const filePath = `public/uploads/${fileName} resume.pdf`; 
        const dataBuffer = await pdf(fs.readFileSync(filePath));
        const pdfText = dataBuffer.text;
        const words = pdfText.toLowerCase().split(/\s+/);

        if(user.Appliedjobs.includes(jobid)){
            const keywords=chosenJob.Skills;
            const matchingCount = keywords.reduce((total,sentence ) => {
                return total + calculateMatchingWordCount(sentence, words);
            }, 0);
            if(matchingCount!=0){
                return { user, matchingCount };
            }
        }
        }).sort((a, b) => b.matchingCount - a.matchingCount);
        res.render("dashboard",{sortedData:sortedData,job:chosenJob.Name,company:chosenJob.Company});
            
}
    


function calculateMatchingWordCount(sentence, words) {
    const sentenceWords = sentence.toLowerCase().split(/\s+/);
   const matchingCount = sentenceWords.filter(word => words.includes(word)).length;
   return matchingCount;
}

module.exports={select,filter}