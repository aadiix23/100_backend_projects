const app = require("./app");
require("dotenv").config();


const PORT = process.env.PORT || 3000;
const app = require("express")
app.use(express.json());

app.use("/api/facts", getFact);

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});