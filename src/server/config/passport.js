var LocalStrategy = require('passport-local').Strategy

module.exports = function(passport, model) {
  passport.serializeUser(function(user, done) {
    done(null, user._id)
  })

  passport.deserializeUser(function(username, done) {
    model.find({username: username}, function(err, user) {
      done(err, user)
    })
  })

  passport.use( 'localLogin', new LocalStrategy(
      // {
      //
      // },
    function(username, password, done) {
      model.findOne({username: username}, function(err, user) {
        if(err)
          return done(err)
        if(!user)
          return done(null, false, {message: `Wrong username`})
        if(!user.validPassword(password))
          return done(null, false, {message: `Bad Password`})
        return done(null, user)
      })
    })
  )
}
