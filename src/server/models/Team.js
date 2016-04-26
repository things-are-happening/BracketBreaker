var mongoose = require('mongoose')

var Schema = mongoose.Schema

var teamSchema = new Schema({
	name: {
		type: String,
	 	required: true
	},
	teamId: {
		type: String,
		required: true,
		unique: true
	},
	players: Array,
	owner: {
		type: Schema.Types.ObjectId,
		ref: `User`
	},
	tournaments: [{
		type: Schema.Types.ObjectId,
		ref: `Tournament`
	}]
}, {timestamp: true, versionKey: false})

module.exports =  mongoose.model('Team', teamSchema)