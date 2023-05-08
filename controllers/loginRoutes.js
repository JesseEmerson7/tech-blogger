const router = require('express').Router()
const User = require('../models/User')
router.get("/", async (req, res)=>{
    res.render('login');
})

router.post("/", async (req, res)=>{
  const loginUser = await User.findOne({
    where:{
        username:req.body.username
   
    },
    raw:true
  })

  //check password to user and respond 200 if password matching. set up session req.session.save()

  console.log(loginUser);
})


module.exports = router