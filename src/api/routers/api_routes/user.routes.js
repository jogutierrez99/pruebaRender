const express = require("express");
const router = express.Router();
const {register, login, getProfile} = require("../../controllers/user.controllers");
const {checkToken} = require("../../middleware/auth");

router.post("/register", register);
router.post("/login", login);
//private routes
router.get("/profile", checkToken, getProfile);

module.exports = router;