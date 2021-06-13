const express = require("express");
const appRouteControllers = require("../controllers/appController");

const router = express.Router();

router.get("/", appRouteControllers.getAppRoute);

module.exports = router;
