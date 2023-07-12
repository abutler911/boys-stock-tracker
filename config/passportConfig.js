const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/User");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "username" },
      (username, password, done) => {
        User.findOne({ username: username })
          .then((user) => {
            if (!user) {
              return done(null, false, {
                message: "That username is not registered",
              });
            }

            bcrypt.compare(password, user.password, (err, isMatch) => {
              console.log("Error in password comparison: ", err);
              console.log("Password match: ", isMatch);
              if (err) throw err;
              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, { message: "Password incorrect" });
              }
            });
          })
          .catch((err) => console.log(err));
      }
    )
  );

  passport.serializeUser((user, done) => {
    console.log("Serialize User: ", user);
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      console.log("Deserialize User: ", user);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });
};
