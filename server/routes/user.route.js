const express = require("express");
const UserController = require("../controllers/user.controller");
const Authenticate = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/signup", UserController.signUp);
router.get("/confirm/:confirmationCode", UserController.confirmUser);
router.post("/login", UserController.login);

module.exports = router;
