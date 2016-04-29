var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	morgan = require('morgan'),
	port = 9000,
	mongoUri = 'mongodb://localhost:27017/tournament';

var tournament = require('./src/server/controllers/tournamentCtrl');
var match = require('./src/server/controllers/matchCtrl');
var team = require('./src/server/controllers/teamCtrl');
var user = require('./src/server/controllers/userCtrl');
var passport = require('./src/server/config/passport');

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/src/client'));
app.use(passport.initialize()); // must come before .session()
app.use(passport.session());
app.post('/api/user', user.addUser); //makes new user
app.get('/api/user', user.getUser);
app.get('/api/getCurrentUser', user.getCurrentUser);
app.post('/api/login', passport.authenticate( 'local-auth', {
  successRedirect: '/api/getCurrentUser'
  }
));
app.get('/api/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send("logged out");
});
//endpoints
app.get('/api/tournament/:id', tournament.getOne);
app.get('/api/tournament', tournament.get);
app.post('/api/tournament', tournament.post);
app.put('/api/tournament', tournament.put);
//////
app.get('/api/match', match.getAll);
app.get('/api/match:id', match.getOne);
app.post('/api/match', match.post);
app.put('/api/match', match.put);
app.delete('/api/match/:id', match.delete);
//////
app.get('/api/team', team.getAll);
app.get('/api/team:id', team.getOne);
app.post('/api/team', team.post);
app.put('/api/team', team.put);
app.delete('/api/team/:id', team.delete);

//connection
app.listen(port, function() {
	console.log('Listening on ' + port);
});
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connected to MongoDB at ' + mongoUri);
});
