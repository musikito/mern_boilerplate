// bring express and router in a single line
const router = require("express").Router();
let Todos = require("../models/todo.model");

// todo home route
router.route("/").get((req, res, next) => {
  Todos.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.status(400).json("Error: " + err));
});

// add a todo
router.route("/add").post((req, res, next) => {
  const username = req.body.username;
  const action = req.body.action;
  const datecompleted = Date.parse(req.body.date);

  const newTodo = new Todos({
    username,
    action,
    datecompleted,
  });
  // save the new todo
  newTodo
    .save()
    .then(() => res.json("todo added"))
    .catch((err) => res.status(400).json("Error: " + err));
});
// remove/delete a todo
router.route("/delete/:id").delete((req, res, next) => {});

module.exports = router;
