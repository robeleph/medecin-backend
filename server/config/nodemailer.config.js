const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

// get config vars
dotenv.config();

const USER = process.env.user;
const PASS = process.env.pass;
const PORT = process.env.PORT;

class NodeMailer {
  static transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: USER,
      pass: PASS,
    },
  });
  static async sendConfirmationEmail(userModel) {
    NodeMailer.transport
      .sendMail({
        from: USER,
        to: userModel.email,
        subject: "Please confirm your account",
        html: `<h1>Email Confirmation</h1>
            <h3>Hello ${userModel.firstName}</h3>
            <p>Thank you for registering on Médecin. Please confirm your email by clicking on the following link</p>
            <a href=http://localhost:${PORT}/user/confirm/${userModel.token}> Click here</a>
            </div>`,
      })
      .catch((err) => {
        return err;
      });
    return userModel;
  }
}
module.exports = NodeMailer;
