const express = require("express");
const UserController = require("../controllers/user.controller");
const Authenticate = require("../middleware/auth.middleware");
const User = require("../models/user.model");
const router = express.Router();

router.post("/signup", UserController.signUp);
router.get("/confirm/:confirmationCode", UserController.confirmUser);
router.post("/login", UserController.login);
router.get("/checkStatus", UserController.checkStatus);

module.exports = router;
