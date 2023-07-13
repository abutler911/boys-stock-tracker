const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Stock = require("../models/Stock");
const { ensureAuthenticated } = require("../config/auth");

router.post("/addStock", ensureAuthenticated, async (req, res) => {
  try {
    console.log(req.body.userId);
    const user = await User.findById(req.body.userId);
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    const newStock = new Stock({
      tickerSymbol: req.body.symbol,
      shares: req.body.shares,
      purchasePrice: req.body.purchasePrice,
      purchaseDate: req.body.purchaseDate,
      user: req.body.userId,
    });
    const savedStock = await newStock.save();

    user.stocks.push(savedStock);

    await user.save();
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
    res.redirect("/dashboard");
  }
});

module.exports = router;
