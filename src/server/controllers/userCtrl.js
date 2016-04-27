var User = require('./../models/User');

var handlePost = function('/api/login', 
  passport.authenticate('localapikey', { session: false,failureRedirect: '/api/unauthorized' }),
  function(req, res) {
    res.json({ message: "Authenticated" })
  });

module.exports = {
	post: handlePost;
}