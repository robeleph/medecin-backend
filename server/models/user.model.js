const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  userType: {
    type: String,
  },
  token: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
