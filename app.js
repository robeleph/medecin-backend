const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const connectDB = require("./server/connection/connection");

const appRoute = require("./server/routes/appRoute");
const PORT = process.env.PORT;

// Set up the express app
const app = express();
connectDB();
// Log requests to the console.
app.use(logger("dev"));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors policy
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//     return res.status(200).json({});
//   }
//   next();
// });
app.use(express.json({ extended: false }));
app.use("/api", appRoute);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to LILO.",
  })
);
var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port); //Listening on port 8888
});
module.exports = app;
