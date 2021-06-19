const User = require("../models/user");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;

class ApplicationCategoriesService {
  static async getAllApplicationCategories(req) {
    const { firstName, lastName } = req.body;
    const token = ApplicationCategoriesService.generateAccessToken({
      firstName: req.body.firstName,
    });
    let user = {
      firstName: firstName,
      lastName: lastName,
      token: token,
    };
    let userModel = new User(user);
    console.log(userModel);
    await userModel.save();
    let response = {
      user: userModel,
    };
    return response;
  }
  static async getAPProute() {
    try {
      const allUsers = await User.find();
      console.log(JSON.parse(allUsers));
      return JSON.parse(allUsers);
    } catch (err) {
      // return JSON.parse({ message: err });
    }
  }
  static generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
  }
}

module.exports = ApplicationCategoriesService;
