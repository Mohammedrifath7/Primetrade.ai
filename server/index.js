const express = require('express');
// const connectDb = require('./config/db.js');
// const router = require('./router/router.js');
require('dotenv').config();
const app = express();


app.use(express.json());
app.use('/api',router);
connectDb();



app.listen(3000,()=>{
    console.log("Server is listening to the Port 3000");
})