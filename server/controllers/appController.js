// const appRouteService = require("../../services/appRouteService");
const ResponseUtil = require("../utils/ResponseUtil");
const responseUtil = new ResponseUtil();

class appRouteController {
  static async getAppRoute(req, res) {
    res.status(200).send({
      message: "Welcome to LILO Backend",
    });
  }
}

module.exports = appRouteController;
