const express = require('express')

const router=express.Router();

router.get("/",(req,res)=>{
    res.send("User Main Rout")
})
router.post("/add",(req,res)=>{
    res.send("New User Added")
    console.log(req.body);
})

module.exports=router;
