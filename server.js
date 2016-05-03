// var express = require('express'),
// 	session = require('express-session'),
// 	app = express(),
// 	bodyParser = require('body-parser'),
// 	cors = require('cors'),
// 	mongoose = require('mongoose'),
// 	morgan = require('morgan'),
// 	LocalStrategy = require('passport-local').Strategy,
// 	port = 9000,
// 	mlabs = require('./src/server/config/database.js');

// mongoose.connect(mlabs.url);

// ////// FILES //////
// var tournament = require('./src/server/controllers/tournamentCtrl');
// var match = require('./src/server/controllers/matchCtrl');
// var team = require('./src/server/controllers/teamCtrl');
// var userCtrl = require('./src/server/controllers/userCtrl.js');
// var passport = require('./src/server/config/passport.js');
// var config = require('./src/server/config/secrets.js');


var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	morgan = require('morgan'),
	passport = require('passport'),
	// LocalStrategy = require('passport-local'),
	// TwitterStrategy = require('passport-twitter'),
	flash = require('connect-flash'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	ejs = require('ejs'),
	port = 9000,
	mongoUri = 'mongodb://localhost:27017/tournament';

var tournament = require('./src/server/controllers/tournamentCtrl');
var match = require('./src/server/controllers/matchCtrl');
var team = require('./src/server/controllers/teamCtrl');
// var User = require('./src/server/models/User.js');
var config = require('./src/server/config/secrets.js')
var userCtrl = require('./src/server/controllers/userCtrl')

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:false}));
app.set('superSecret', config.secret);
app.use(cors());
app.use(express.static(__dirname + '/src/client'));
app.use(session({secret:config.secret}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:false}));
app.set('superSecret', config.secret);
app.use(cors());
app.use(express.static(__dirname + '/src/client'));
app.use(session({secret:config.secret}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//endpoints
var routes = require('./src/server/config/routes.js')(app, passport);
var localpass = require('./src/server/config/passport.js')(passport);
app.set('view engine', 'ejs');
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
app.put('/api/tournament/:id', tournament.put);
app.delete('/api/tournament/:id', tournament.delete);
app.post('api/tourrsnament/:id', tournament.postTournamentToUser);
app.get('/api/tournament/:id', tournament.getAllTournamentsForUser);
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
mongoose.connect(config.database);

mongoose.connection.once('open', function() {
	console.log('Connected to MongoDB at ' + config.database);
	// console.log('Connected to MongoDB at ' + mlabs);
});
