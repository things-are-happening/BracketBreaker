var mongoose = require('mongoose')

var Schema = mongoose.Schema

var teamSchema = new Schema({
	name: {
		type: String,
	 	required: true
	},
	players: Array,
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	tournaments: [{
		type: Schema.Types.ObjectId,
		ref: 'Tournament'
	}]
})

module.exports =  mongoose.model('Team', teamSchema)

// , {timestamp: true, versionKey: false}