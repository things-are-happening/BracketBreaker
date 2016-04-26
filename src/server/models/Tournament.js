var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tournament = new Schema({
	sport: {
		type: String,
		required: true
	},
	Teams: Number,
	name: {
		type: String,
		required: true
	},
	tournamentId: {
		type: String,
		required: true,
		unique: true
	},
	match: {
		type: Schema.Types.ObjectId,
		ref: 'Match'
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
}, {timestamp: true, versionKey: false})

module.exports = mongoose.model('Tournament', tournament)