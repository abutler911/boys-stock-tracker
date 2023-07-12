const express = require("express");
const router = express.Router();
const user = require("../models/User");

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  const newUser = new user({
    username: req.body.username,
    password: req.body.password,
  });

  newUser
    .save()
    .then(() => {
      res.redirect("/login");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
