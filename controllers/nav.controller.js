const User = require('../models/User.schema.js');
const Job = require('../models/jobs.schema.js');

const notifiy = async (req, res) => {
  const getuser = req.session.email;
  const getprofile = await User.findOne({ email: getuser }).exec();
  const acceptedCvArray = getprofile.acceptedCV;

  // Define notificationMessages as an empty array
  const notificationMessages = [];
  
  for (const jobId of acceptedCvArray) {
    const job = await Job.findOne({ _id: jobId }).exec();

    if (job) {
      // Create a notification message based on job details
      const notificationMessage = `Congratulations! Your CV Has Been Approved By The HR for the Title: ${job.Name} at ${job.Company}.`;

      // Push the message to the notificationMessages array
      notificationMessages.push(notificationMessage);
    }
  }

  return notificationMessages;
};

module.exports = {notifiy};
