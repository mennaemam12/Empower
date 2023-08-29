const Job = require('../models/jobs.schema.js');
const Users=require('../models/User.schema.js')
const btnId=async function (req, res){
    try {
    const { jobId } = req.body;
    const user = await Users.findById(req.session.user._id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      if (user.Appliedjobs.includes(jobId)) {
        return res.status(400).json({ error: 'Job already applied' });
      }
      const job = await Job.findById(jobId);

      if (!job) {
        return res.status(404).json({ error: 'Job not found' });
      }
      user.Appliedjobs.push(jobId);
      await user.save();
      const appliedJobIds = await Users.find({ email: req.session.email }, 'Appliedjobs');
      res.json({ success: true, appliedJobIds });
    }
    catch (error) {
        console.error('Error applying for job:', error);
        res.status(500).json({ error: 'Error applying for job' });
      }
    } 
    module.exports={btnId};