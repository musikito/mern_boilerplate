const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create a schema User
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The name field is required"],
      trim: true,
    },
    username: {
      type: String,
      required: [true, "The username field is required"],
      unique: [true, "The username is already taken"],
      trim: true,
      minlength: [7, "The username should be at least 7 characters"],
    },
    email: {
      type: String,
      required: [true, "The Email field is required"],
      unique: [true, "The email is already taken"],
      match: [/.+\@.+\..+/, "Please use a valid email address"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// create model for User
const User = mongoose.model("User", userSchema);

module.exports = User;
