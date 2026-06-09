const express = require("express");
const app = express();
app.use(express.json());
const routes = require("./src/routes/auth.routes")

app.use("/auth",routes);
module.exports=app;