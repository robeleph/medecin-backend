const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  //   const token = req.header("Authorization").replace("Bearer ", "");
  const authHeader = req.headers["authorization"];
  //   const token = authHeader && authHeader.split(" ")[1];
  //   const data = jwt.verify(token, process.env.TOKEN_SECRET);
  if (authHeader) {
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
module.exports = auth;
