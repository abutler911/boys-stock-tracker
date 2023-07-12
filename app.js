const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

//MIDDLEWARE
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, "public")));

//ROUTES

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
