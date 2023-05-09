const router = require('express').Router()
const  { User }  = require('../models')



router.get("/", async (req, res)=>{
    res.render('signUp');
})

router.post("/", async (req, res)=>{
  try {
   
    
  } catch (error) {
    res.status(400).json(error);
  }
  
 
})


module.exports = router