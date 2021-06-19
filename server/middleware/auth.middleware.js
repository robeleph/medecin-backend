const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const authenticate = async (req, res, next) => {
  //   const token = req.header("Authorization").replace("Bearer ", "");
  const AUTH_HEADER = req.headers["authorization"];
  //   const token = authHeader && authHeader.split(" ")[1];
  //   const data = jwt.verify(token, process.env.TOKEN_SECRET);
  if (AUTH_HEADER) {
    next();
  } else {
    return false;
  }
  // try {
  //     const user = await User.findOne({ _id: data._id, 'tokens.token': token })
  //     if (!user) {
  //         throw new Error()
  //     }
  //     req.user = user
  //     req.token = token
  //     next()
  // } catch (error) {
  //     res.status(401).send({ error: 'Not authorized to access this resource' })
  // }
};
module.exports = authenticate;
