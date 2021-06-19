const express = require("express");
const UserController = require("../controllers/user.controller");
const Authenticate = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/", UserController.signUp);

module.exports = router;
