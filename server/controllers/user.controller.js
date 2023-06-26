const UserService = require("../services/user.service");
const ResponsesUtil = require("../utils/response.util");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const RESPONSE_UTIL = new ResponsesUtil();

class userRouteController {
  static async signUp(req, res) {
    User.findOne({ email: req.body.email }, async function(err, user) {
      if (err) {
        console.error('Error finding user:', err);
        return;
      }
      if (!user) {
        try {
          const USER_RESPONSE = await UserService.registerUser(req);
          if (USER_RESPONSE) {
            RESPONSE_UTIL.setSuccess(
              200,
              "User Registered Successfully!",
              USER_RESPONSE
            );
          }
          return RESPONSE_UTIL.send(res);
        } catch (error) {
          RESPONSE_UTIL.setError(400, error);
          return RESPONSE_UTIL.send(res);
        }
      } else {
        return res
        .status(200)
        .json({ error: "User already exists." });
      }
    });
  }
  static async login(req, res) {
    User.findOne({
      email: req.body.email,
    }).then(async (user) => {
        try {
          bcrypt.compare(req.body.password, user.password).then((cred) => {
            if (cred) {
              RESPONSE_UTIL.setSuccess(200, "Login Successful", user);
              return RESPONSE_UTIL.send(res);
            } else {
              return res
                .status(200)
                .json({ error: "Invalid login credentials" });
            }
          });
        } catch (error) {
          RESPONSE_UTIL.setError(404, error);
          return RESPONSE_UTIL.send(res);
        }
    });
  }
}

module.exports = userRouteController;
