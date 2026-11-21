const express = require("express");
const router = express.Router();
const {SignUp} = require("../Controllers/UserController");

router.post("/signup", SignupUser);
router.post("/login", LoginUser);

module.exports =  router;
