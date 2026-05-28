const express = require("express");
const router = require("./src/routes/weatherRoutes")
const app = express();
app.use(express.json())
app.use("/api/weather",router)
module.exports = app;