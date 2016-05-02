 // Load required packages
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var User = require('../models/User');

passport.use(new BasicStrategy(
  function(username, password, callback) {
    console.log("BasicStrategy", username, password);
    User.findOne({ userName: username }, function (err, user) {
      if (err) { return callback(err); }
      console.log("found user?", user);

      // No user found with that username
      if (!user) { return callback(null, false); }

      // Make sure the password is correct
      var isMatch = user.validatePassword(password);
      
      console.log("did it validate?", isMatch);
      if (err) { return callback(err); }

      // Password did not match
      if (!isMatch) { return callback(null, false); }
      console.log("Success!");
      // Success
      return callback(null, user);
    });
  }
  ));

exports.isAuthenticated = passport.authenticate('basic', { session : false });
// =======
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var User = require('./../models/User.js');

// passport.use('local-auth', new LocalStrategy(function (username, password, done) {

//     User.findOne({
//       username: username
//     })
//       .exec(function(err, user) {
//         if (err) {
//           done(err);
//         }
//         if (user) {
//           if (user.validatePassword(password)) {
//             return done(null, user);
//           } else {
//             return done(null, false);
//           }
//         }
//         return done(null, false);
//       });
//   }));

// passport.serializeUser(function(user, done) {
//   done(null, user._id);
// });
// passport.deserializeUser(function(_id, done) {
//   User.findById(_id, function(err, user) {
//     done(err, user);
//   });
// });


// module.exports = passport;
