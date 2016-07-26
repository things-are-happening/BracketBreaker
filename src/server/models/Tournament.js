var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tournament = new Schema({
	sport: {
		type: String,
		required: true
	},
	location: {
		type: String
	},
	start: Date,
	end: Date,
	type: {
		type: String,
		required: true
	},
	teams: Number,
	name: {
		type: String,
		required: true
	},
	teamNames:{
		type: Array
	},
	round: {
		roundOne: [{
			teamOne: String,
			teamOneScore: {type: Number, default: 0},
			teamTwo: String,
			teamTwoScore: {type: Number, default: 0},
			winners: [String]
		}],
		roundTwo: [{
			teamOne: String,
			teamOneScore: {type: Number, default: 0},
			teamTwo: String,
			teamTwoScore: {type: Number, default: 0},
			winners: [String]
		}],
		roundThree: [{
			teamOne: String,
			teamOneScore: {type: Number, default: 0},
			teamTwo: String,
			teamTwoScore: {type: Number, default: 0},
			winners: [String]
		}],
		roundFour: [{
			teamOne: String,
			teamOneScore: {type: Number, default: 0},
			teamTwo: String,
			teamTwoScore: {type: Number, default: 0},
			winners: [String]
		}],
		roundFive: [{
			teamOne: String,
			teamOneScore: {type: Number, default: 0},
			teamTwo: String,
			teamTwoScore: {type: Number, default: 0},
			winners: [String]
		}]
},
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
}
, {timestamp: true, versionKey: false}
)

module.exports = mongoose.model('Tournament', tournament)
