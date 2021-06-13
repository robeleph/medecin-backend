const express = require("express");
const appRouteControllers = require("../controllers/appController");

const router = express.Router();

router.post("/", appRouteControllers.getAppRoute);

module.exports = router;
