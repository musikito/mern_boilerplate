const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create a schema User
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "The username field is requiered"],
      unique: true,
      trim: true,
      minlength: 8,
    },
  },
  {
    timestamps: true,
  }
);

// create model for User
const User = mongoose.model("User", userSchema);

module.exports = User;
