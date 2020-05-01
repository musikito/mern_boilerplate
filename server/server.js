const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

// Create our app and port to connect
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
/**
 *  Instead of using cors, we can use the following snippet after we initialized the app:
 * app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
 */
app.use(express.json());

// Using mongoose to connect to our ATLAS
// or to a local mongodb server, just change the env variable
// to suit your needs.
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected succesfully to MongoDB");
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running at port # ${port}`);
});
