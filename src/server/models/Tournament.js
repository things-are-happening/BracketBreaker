var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tournament = new Schema({
	sport: {
		type: String,
		required: true
	},
	teams: Number,
	name: {
		type: String,
		required: true
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