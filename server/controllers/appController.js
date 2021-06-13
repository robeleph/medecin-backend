// const appRouteService = require("../../services/appRouteService");
const ResponseUtil = require("../utils/ResponseUtil");
const responseUtil = new ResponseUtil();

class appRouteController {
  static async getAppRoute(req, res) {
    responseUtil.setSuccess(200, "Welcome to LILO");
  }
}

module.exports = appRouteController;
