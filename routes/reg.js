const Router=require('express');
const router=Router();

router.get('/',(req,res)=>
{
    res.render('reg')
})
module.exports = router;
