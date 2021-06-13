const express = require("express");
const appRouteControllers = require("../controllers/appController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", appRouteControllers.postAppRoute);
router.get("/", auth, appRouteControllers.getAppRoute);

module.exports = router;
