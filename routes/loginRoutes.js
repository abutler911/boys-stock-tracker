const express = require("express");
const passport = require("passport");
const router = express.Router();

// Login Form
router.get("/login", (req, res) => {
  res.render("login");
});

// Login Process
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    console.log(err);
    console.log(user);
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("error_msg", info.message);
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/dashboard");
    });
  })(req, res, next);
});

// Logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = router;
