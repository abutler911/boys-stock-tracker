const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

// Dashboard Page
router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    user: req.user,
  });
});

module.exports = router;