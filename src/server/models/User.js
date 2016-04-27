var mongoose = require('mongoose')

var Schema = mongoose.Schema

var userSchema = new Schema({
	name: {
		type: String,
		required: true
	}
	userName: {
		type: String,
		required: true,
		unique: true
	},
	email: { 
		type: String, 
		unique: true 
	},
	password: {
		type: String,
		required: true
	},
	passwordResetToken: String,
	passwordResetExpires: Date,

	google: String,
	facebook: String,

	

	profile: {
    name: { type: String, default: '' },
    gender: { type: String, default: '' },
    location: { type: String, default: '' },
    website: { type: String, default: '' },
    picture: { type: String, default: '' }
  	}

}, {timestamp: true, versionKey: false});