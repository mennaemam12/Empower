const Users=require('../models/User.schema.js');
const updateprofile= async (req,res) => {
let {bio,phone}=req.body;
console.log(bio);
const getuser = req.session.email;
const getprofile = await Users.findOne({ email: getuser });
getprofile.Bio=bio;
getprofile.Phone=phone;
getprofile.save();
res.redirect('/myprofile');
}
const newskill= async (req,res) =>{
    try {
        const getuser = req.session.email;
        const getprofile = await Users.findOne({ email: getuser });
        const { skill } = req.body;
        if (!getprofile) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        getprofile.Skills.push(skill);
        await getprofile.save();
    
        res.status(201).json({ message: 'Skill added successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
    };
module.exports={updateprofile,newskill};