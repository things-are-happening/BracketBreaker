var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	morgan = require('morgan'),
	passport = require('passport')
	port = process.env.PORT || 9000,
	router = express.Router(),
	mongoUri = 'mongodb://localhost:27017/tournament';

var tournament = require('./src/server/controllers/tournamentCtrl');
var match = require('./src/server/controllers/matchCtrl');
var team = require('./src/server/controllers/teamCtrl');
var user = require('./src/server/controllers/userCtrl');
var passportAuth = require('./src/server/config/passport');

//middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/src/client'));
app.use(passport.initialize());
app.use('/api', router);

//endpoints
router.route('/tournament')
	  .get(passportAuth.isAuthenticated, tournament.get)
	  .post(passportAuth.isAuthenticated, tournament.post)
	  .put(passportAuth.isAuthenticated, tournament.put);
router.route('/tournament/:tournament_id')
	  .get(passportAuth.isAuthenticated, tournament.getOne)
	  .delete(passportAuth.isAuthenticated, tournament.delete);
//////
router.route('/match')
	  .get(passportAuth.isAuthenticated, match.getAll)
	  .post(passportAuth.isAuthenticated, match.post)
	  .put(passportAuth.isAuthenticated, match.put);
router.route('/match/:match_id')	  
	  .get(passportAuth.isAuthenticated, match.getOne)
	  .delete(passportAuth.isAuthenticated, match.delete)
	  .post(passportAuth.isAuthenticated, match.postMatchesById);
//////
router.route('/team')
	  .get(passportAuth.isAuthenticated, team.getAll)
	  .post(passportAuth.isAuthenticated, team.post)
	  .put(passportAuth.isAuthenticated, team.put);
router.route('/team/:team_id')	  
	  .get(passportAuth.isAuthenticated, team.getOne)
	  .delete(passportAuth.isAuthenticated, team.delete);
//////
router.route('/users')
	  .post(user.post)
	  .get(passportAuth.isAuthenticated, user.get);



//connection
app.listen(port, function() {
	console.log('Listening on ' + port);
});
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connected to MongoDB at ' + mongoUri);
});