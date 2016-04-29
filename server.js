var express = require('express'),
	session = require('express-session'),
	app = express(),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	morgan = require('morgan'),
	LocalStrategy = require('passport-local').Strategy,
	port = 9000,
	mlabs = require('./src/server/config/database.js');

mongoose.connect(mlabs.url);

////// FILES //////
var tournament = require('./src/server/controllers/tournamentCtrl');
var match = require('./src/server/controllers/matchCtrl');
var team = require('./src/server/controllers/teamCtrl');
var userCtrl = require('./src/server/controllers/userCtrl.js');
var passport = require('./src/server/config/passport.js');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

app.use(express.static(__dirname + '/src/client'));

app.use(session({
    secret: 'flsjf843957483hfhjhsjfkhdaklhg',
    resave: true,
    saveUninitialized: true
  }));

//// PASSPORT LOCAL AUTH ////
	app.use(passport.initialize()); // must come before .session()
	app.use(passport.session());


////// AUTH ENDPOINTS //////

	/// USER ///
	app.post('/api/user', userCtrl.addUser); //makes new user
	app.get('/api/user', userCtrl.getUser);
	app.get('/api/getCurrentUser', userCtrl.getCurrentUser);
	//current user , goes to user controller, res.send(req.user) sends back current user
	    //call endpoint in resolve(front end) to have 'admin only' pages and such.

	/// LOGIN ///
	app.post('/api/login', passport.authenticate( 'local-auth', {
	  successRedirect: '/api/getCurrentUser'
	  }
	));

	/// LOGOUT ///
	app.get('/api/logout', function(req, res, next) {
	  req.logout();
	  return res.status(200).send("logged out");
	});




//// OTHER ENDPOINTS ////

app.get('/api/tournament/:id', tournament.getOne);
app.get('/api/tournament', tournament.get);
app.post('/api/tournament', tournament.post);
app.put('/api/tournament', tournament.put);
app.delete('/api/tournament/:id', tournament.delete);
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

//CONNECTION
app.listen(port, function() {
	console.log('Listening on ' + port);
});

mongoose.connection.once('open', function() {
	console.log('Connected to MongoDB at ' + mlabs);
});
