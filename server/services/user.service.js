const User = require("../models/user.model");
const TokenGenerator = require("../utils/generateToken.util");
const PasswordEncrypt = require("../utils/bcrypt.util");
class UserService {
  static async registerUser(req) {
    const {
      firstname,
      lastname,
      email,
      password,
      userType
    } = req.body;

    const token = TokenGenerator.generateAccessToken({
      email: req.body.email,
    });
    let user = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: await PasswordEncrypt.encryptPassword(password),
      token: token,
      userType: userType
    };
    let userModel = new User(user);
    userModel = await userModel.save();
    return userModel;
  }
}

module.exports = UserService;
