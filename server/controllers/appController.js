const ResponseUtil = require("../utils/ResponseUtil");
const mongoose = require("mongoose");
const User = require("../models/user");

const responseUtil = new ResponseUtil();

class appRouteController {
  static async getAppRoute(req, res) {
    console.log(req.body);
    const { firstName, lastName } = req.body;
    let user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
  }
}

module.exports = appRouteController;
