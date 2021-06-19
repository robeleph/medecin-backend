const User = require("../models/user.model");
const TokenGenerator = require("../utils/generateToken.util");
const PasswordEncrypt = require("../utils/bcrypt.util");
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
      token: token,
    };
    console.log(user.password);
    let userModel = new User(user);
    await userModel.save();
    let response = {
      user: userModel,
    };
    return response;
  }
}

module.exports = UserService;
