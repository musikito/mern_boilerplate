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

// find a todo by id
router.route("/:id").get((req, res, next) => {
  Todos.findById(req.params.id)
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json("Error: " + err));
});

// update a todo by id
router.route("/update/:id").post((req, res, next) => {
  Todos.findById(req.params.id)
    .then((todo) => {
      todo.username = req.body.username;
      todo.action = req.body.action;
      todo.datecompleted = Date.parse(req.body.date);
      // console.log(todo.username);

      todo
        .save()
        .then(() => res.json("Todo Updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// remove/delete a todo
router.route("/delete/:id").post((req, res, next) => {
  Todos.findByIdAndDelete(req.params.id)
    .then(() => res.json("todo deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
