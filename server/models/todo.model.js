const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    action: {
      type: String,
      required: [true, "The todo text field is requiered"],
    },
    username: {
      type: String,
      required: [true, "The username field is requiered"],
    },
    dateCompleted: {
      type: Date,
      required: [true, "The completed date field is requiered"],
    },
  },
  {
    timestamps: true,
  }
);
// create model for todo
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
