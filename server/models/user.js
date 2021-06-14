const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  token: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
