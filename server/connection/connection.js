const mongoose = require("mongoose");
const dotenv = require("dotenv");

// get config vars
dotenv.config();

// access config var
process.env.dbUser;
process.env.dbPassword;
const URI =
  "mongodb+srv://" + process.env.dbUser + ":" + process.env.dbPassword + "@cluster0.sgnsk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected ...");
};
module.exports = connectDB;
