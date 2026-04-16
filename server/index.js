const express = require("express");
const connectDb = require("./config/db");
const router = require("./routers/router.js");
const cors = require('cors');
const movieRouter = require("./routers/movie.router.js");
require("dotenv").config();
const app = express();
connectDb();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use("/api/movies",movieRouter);
app.listen(process.env.PORT, () => {
  console.log(`Server is listening to the Port : ${process.env.PORT}`);
});
