const express = require("express");
const dotenv = require("dotenv")
const database = require("./src/config/db")
const app = express();
dotenv.config()

database.connectDB();
app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on ${process.env.PORT}`)
})



