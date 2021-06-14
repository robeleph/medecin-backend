const ResponseUtil = require("../utils/ResponseUtil");
const mongoose = require("mongoose");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const responseUtil = new ResponseUtil();
const dotenv = require("dotenv");

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

class appRouteController {
  static async postAppRoute(req, res) {
    const { firstName, lastName } = req.body;
    console.log(req.body);
    const token = appRouteController.generateAccessToken({
      firstName: req.body.firstName,
    });
    let user = {
      firstName: firstName,
      lastName: lastName,
      token: token,
    };
    let userModel = new User(user);
    await userModel.save();
    let response = {
      user: userModel,
    };
    res.json(response);
  }
  static async getAppRoute(req, res) {
    try {
      const allUsers = await User.find();
      return res.json(allUsers);
    } catch (err) {
      return res.json({ message: err });
    }
  }
  static generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
  }
}

module.exports = appRouteController;
