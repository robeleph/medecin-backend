const appServices = require("../services/appServices");
const ResponsesUtil = require("../utils/ResponseUtil");

const responsesUtil = new ResponsesUtil();

class appRouteController {
  static async postAppRoute(req, res) {
    try {
      const userResponse = await appServices.getAllApplicationCategories(req);
      if (userResponse) {
        responsesUtil.setSuccess(
          200,
          "All application categories retrieved successfully!",
          userResponse
        );
      } else {
        responsesUtil.setSuccess(200, "No application categories found!");
      }
      return responsesUtil.send(res);
    } catch (error) {
      responsesUtil.setError(400, error);
      return responsesUtil.send(res);
    }
  }
  static async getAppRoute(req, res) {
    return appServices.getAPProute();
  }
}

module.exports = appRouteController;
