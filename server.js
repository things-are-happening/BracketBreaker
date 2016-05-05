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
	port = 9000

var tournament = require('./src/server/controllers/tournamentCtrl');
var match = require('./src/server/controllers/matchCtrl');
var team = require('./src/server/controllers/teamCtrl');
// var User = require('./src/server/models/User.js');
var config = require('./src/server/config/secrets.js')

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
app.get('/api/tournament/:id', tournament.getOne);
app.get('/api/tournament', tournament.get);
app.post('/api/tournament', tournament.post);
app.put('/api/tournament/:id', tournament.put);
app.delete('/api/tournament/:id', tournament.delete);
app.post('api/tournament/:id', tournament.postTournamentToUser);
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

//connection
app.listen(port, function() {
	console.log('Listening on ' + port);
});
mongoose.connect(config.database);
mongoose.connection.once('open', function() {
	console.log('Connected to MongoDB at ' + config.database);
});
