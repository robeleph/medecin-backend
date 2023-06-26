const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const authenticate = async (req, res, next) => {
  const AUTH_HEADER = req.headers["authorization"];
  if (AUTH_HEADER) {
    next();
  } else {
    return false;
  }
};
module.exports = authenticate;
