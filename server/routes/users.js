// bring express and router in a single line
const router = require("express").Router();
// bring the users model
let User = require("../models/user.model");
// home of the user route
router.route("/").get((req, res, next) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// add a user route
router.route("/add").post((req, res, next) => {
  const username = req.body.username;
  const name = req.body.name;
  const email = req.body.email;

  const newUser = new User({ name, username, email });

  newUser
    .save()
    .then(() => res.json("user added"))
    .catch((err) => res.status(400).json("error: " + err));
});

module.exports = router;
