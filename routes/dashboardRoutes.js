const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const User = require("../models/User");

// Dashboard Page
router.get("/dashboard", ensureAuthenticated, async (req, res) => {
  try {
    const userWithStocks = await User.findById(req.user._id).populate("stocks");
    res.render("dashboard", {
      user: userWithStocks,
    });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

module.exports = router;
