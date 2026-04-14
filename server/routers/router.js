const express = require("express");
const bcrypt = require('bcrypt');
const router = express.Router();

require('dotenv').config();

router.post("/user", async(req,res) =>{
    try{
        const {email,userName,password,role} = req.body;
        const hashPass = await bcrypt.hash(password,10);
        
    } catch(err){

    }
})