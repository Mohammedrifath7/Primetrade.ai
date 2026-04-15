const express = require("express");
const connectDb = require("./config/db");
const router = require("./routers/router.js");

require("dotenv").config();
const app = express();
connectDb();

app.use(express.json());
app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening to the Port : ${process.env.PORT}`);
});
