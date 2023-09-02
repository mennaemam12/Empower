const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const addposition=require("../controllers/addposition");
router.use(bodyParser.json());

router.get('/',(req,res)=>
{
    res.render('addposition')
})
router.post('/',addposition);
module.exports = router;