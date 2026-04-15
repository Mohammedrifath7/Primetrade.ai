
const express = require("express");
const bcrypt = require('bcrypt');
const User = require("../model/schema");
const generateToken = require("../utils/function");
const verifyToken = require("../middleware/middleware");
const router = express.Router();

require('dotenv').config();


const SignUp = async(req,res) =>{
    try{
        const {email,userName,password} = req.body;
        if (!email || !userName || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({email});

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPass = await bcrypt.hash(password,10);
        const newUser = new User({
            email,
            userName,
            password : hashPass,
            role : "user"
        });
        await newUser.save();
        return res.status(201).json({ message : "User Created Succesfully"});

    } catch(err){
        return res.status(500).json({message : err.message});
    }
}

const SignIn =  async(req,res) =>{
    try{
        const {email,password} = req.body;
        if(!email || !password ){
            return res.status(400).json({ message: "All fields are required" });
        }
        const user  = await User.findOne({email});
        if(!user){
            return res.status(400).json({ message: "User doesn't exists" });            
        }

        if(await bcrypt.compare(password, user.password)){
            const token = generateToken(user);
            res.status(200).json({
                message : "Login successfull",
                token,
                user : {
                    id : user._id,
                    email : user.email,
                    role: user.role
                }
            });
        } else{
            return res.status(401).json({ message : "Incorrect Password!"});
        }

    } catch(err){
        return res.status(500).json({message : err.message});

    }
}



module.exports = {SignUp,SignIn};