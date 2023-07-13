// Package imports
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const axios = require("axios");
const session = require("express-session");
const flash = require("connect-flash");

// Local imports
const registerRoutes = require("./routes/registerRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const loginRoutes = require("./routes/loginRoutes");
const addStocksRoutes = require("./routes/addStocksRoutes");

const connectDB = require("./config/database");
const passportConfig = require("./config/passportConfig");

// Environment variables
dotenv.config();

// App setup
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// App settings
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, "public")));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

// Flash messages
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// Routes
app.use("/", registerRoutes);
app.use("/", loginRoutes);
app.use("/", dashboardRoutes);
app.use("/", addStocksRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/stocks/:symbol", async (req, res) => {
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${req.params.symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Server
app.listen(PORT, () => {
  console.log(`App is up and listening on port ${PORT}...`);
});
