const mongoose = require("mongoose");
const URI =
  "mongodb+srv://dbUser:dbUserPassword@cluster0.sgnsk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectDB = async () => {
    console.log("db")
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected ..");
};
module.exports = connectDB;
