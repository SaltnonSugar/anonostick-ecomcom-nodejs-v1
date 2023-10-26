"use strict";
const express = require("express");
const accessController = require("../../controller/access.controller");
const router = express.Router();

// sign up
router.post("/shop/signup", accessController.signUp);
//export default
module.exports = router;
