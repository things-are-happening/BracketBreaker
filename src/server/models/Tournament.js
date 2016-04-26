var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tournament = new Schema({
	sport: {
<<<<<<< HEAD
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
=======
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
>>>>>>> a3eb7610525578967998d19fda1e2b5236bd14ab
	match: {
		type: Schema.Types.ObjectId,
		ref: 'Match'
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User'
<<<<<<< HEAD
	},
	location: String
})
=======
	}
}
// , {timestamp: true, versionKey: false}
)
>>>>>>> a3eb7610525578967998d19fda1e2b5236bd14ab

module.exports = mongoose.model('Tournament', tournament)