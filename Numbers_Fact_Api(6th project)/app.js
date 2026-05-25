const express = require("express");
const app = express();
const getFact = require("./src/routes/routes")

app.use(express.json());

app.use("/api/facts", getFact);

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
module.exports=app;