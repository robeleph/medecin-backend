const User = require("../models/user.model");
const TokenGenerator = require("../utils/generateToken.util");
const PasswordEncrypt = require("../utils/bcrypt.util");
const NodeMailer = require("../config/nodemailer.config");
class UserService {
  static async registerUser(req) {
    const {
      firstName,
      lastName,
      email,
      password,
      age,
      languageProficiency,
      phoneNumber,
      gender,
    } = req.body;

    const token = TokenGenerator.generateAccessToken({
      firstName: req.body.firstName,
    });
    let user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: await PasswordEncrypt.encryptPassword(password),
      age: age,
      languageProficiency: languageProficiency,
      phoneNumber: phoneNumber,
      gender: gender,
      status: "PENDING",
      token: token,
    };
    let userModel = new User(user);
    userModel = await userModel.save();
    NodeMailer.sendConfirmationEmail(userModel);
    return userModel;
  }
}

module.exports = UserService;
