const express = require("express")
const app = express();
const DB = require("./config/db.js")
const todoRoutes = require("./routes/todoRoutes")

app.use(express.json());
app.use("/", todoRoutes);

module.exports = app;