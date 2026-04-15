const express = require("express");
const bcrypt = require('bcrypt');
const User = require("../model/schema");
const generateToken = require("../utils/function");
const verifyToken = require("../middleware/middleware");
const { SignUp, SignIn} = require("../controllers/controller");
const checkRole = require("../middleware/role");
const router = express.Router();

require('dotenv').config();

router.post('/signUp', SignUp)



router.get('/data',verifyToken ,  async(req,res) =>{
  res.json({message :  `Welcome ${req.user.email} This is protected!`});

});

router.get('/admin', verifyToken, checkRole("admin"), (req, res) => {
    res.json({ message: "Admin access granted" });
});

router.post('/signin',SignIn)

module.exports = router;