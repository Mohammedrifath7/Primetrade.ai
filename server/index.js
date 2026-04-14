const express = require('express');
const connectDb = require('./config/db');

require('dotenv').config();
const app = express();
connectDb();

app.use(express.json());



app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to the Port : ${process.env.PORT}`);
})
