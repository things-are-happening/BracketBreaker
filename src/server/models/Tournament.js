var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tournament = new Schema({
	sport: {
        type: String,
        required: true
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
	match: {
		type: Schema.Types.ObjectId,
		ref: 'Match'
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
})

module.exports = mongoose.model('Tournament', tournament)