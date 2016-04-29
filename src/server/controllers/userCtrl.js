var User = require('../models/User');

var postUsers = function(req, res) {
  var user = new User({
    username: req.body.username,
    password: req.body.password
  });

  user.save(function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'New BracketBreaker champion added to the locker room!' });
  });
};
//////////

var getUsers = function(req, res) {
  User.find(function(err, users) {
    if (err)
      res.send(err);

    res.json(users);
  });
};


module.exports = {
  post: postUsers,
  get: getUsers
  
};
