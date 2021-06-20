const bcrypt = require("bcrypt");
class PasswordEncrypt {
  static async encryptPassword(password) {
    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // return hashed password
    return await bcrypt.hash(password, salt);
  }
  static async comparePassword(password1, password2) {
    await bcrypt.compare(password1, password2).then(async (res) => {
      return res;
    });
  }
}
module.exports = PasswordEncrypt;
