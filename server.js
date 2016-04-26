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
var user = require('./src/server/controllers/teamCtrl');

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/src/client'));

//authentication
// var passport = require('passport');
// var session = require('express-session');
// var GoogleStrategy = require('passport-google-oauth').OAuth2Stragety;

// passport.use(new GoogleStrategy({
// 	clietnId: '',
// 	clientSecret: '',
// 	callbackUrl: ''
// }))
// // app.use(session({secret:}))

// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(function(user, done) {
// 	done(null, user);
// })
// passport.deserializeUser(function(user, done) {
// 	done(null, user);
// })

//endpoints
app.get('/api/tournament/:id', tournament.getOne);
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
//////
app.post('api/login', user.post);

//authentication
// passport.use(new LocalAPIKeyStrategy(
//   function(apikey, done) {
//     User.findOne({ apikey: apikey }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       return done(null, user);
//     });
//   }
// ));

//connection
app.listen(port, function() {
	console.log('Listening on ' + port);
});
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connected to MongoDB at ' + mongoUri);
});