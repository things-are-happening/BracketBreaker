var mongoose = require('mongoose')

var Schema = mongoose.Schema

var userSchema = new Schema({
	name: {
		type: String,
	 	required: true
	},
	userName: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		unique: true
	},
	
}, {timestamp: true, versionKey: false})

module.exports =  mongoose.model('User', userSchema)