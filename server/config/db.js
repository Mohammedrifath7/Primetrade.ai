const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async() =>{
    try{
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("MongoDB Connected!");
    } catch(err) { 
        console.log("Error " + err.message);
    }
}


module.exports = connectDb;