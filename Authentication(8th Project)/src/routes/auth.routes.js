const controller = require("../controller/auth.cotroller")
const express = require("express")
const router = express.Router();

router.post("/register",controller.register)
router.post("/login",controller.login)
router.post("/forgotPassword",controller.forgotPassword)
module.exports=router;
