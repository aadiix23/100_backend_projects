const express = require("express");
const app = express();
const getFact = require("./src/routes/routes");

app.use(express.json());

app.use("/api/facts", getFact);

module.exports = app;