const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    action: {
      type: String,
      required: [true, "The todo text field is required"],
    },
    username: {
      type: String,
      required: [true, "The username field is required"],
    },
    dateCompleted: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);
// create model for todo
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
