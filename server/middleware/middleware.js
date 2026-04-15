const User = require("../model/schema");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = async(req,res,next) =>{
    const authHeader = req.headers['authorization'];

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message : "Token missing or invalid format" });
    }

    const token = authHeader.split(' ')[1];


    try{
        const decode = jwt.verify(token, process.env.SECRET_KEY);

        const user = await User.findById(decode.id);
        if(!user){
            return res.status(401).json({message : "User not found!"});
        }

        req.user = user;
        next();

    } catch(err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}



module.exports = verifyToken;