var User = require('../models/User');

var addUsers = function(req, res) {
  var user = new User({
    name: req.body.name,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password
  });

  user.save(function(err) {
    if (err)
      return res.send(err);

    res.send({ 
      message: 'New BracketBreaker champion added to the locker room!',
      newUser: user
     });
  });
};
//// in the front-end, to acces the user: respnse.data.newUser
////////// 

var getUsers = function(req, res) {
  User.find(function(err, users) {
    if (err)
      res.send(err);

    res.json(users);
  });
};


module.exports = {
  post: addUsers,
  get: getUsers
  
};
