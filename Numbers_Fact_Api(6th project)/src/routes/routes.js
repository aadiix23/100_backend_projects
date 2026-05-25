const express = require("express");
const router = express.Router();
const getfact = require("../controller/numberscontroller")

router.get(":/number",getfact.fact)

module.exports = router;