var mongoose = require('mongoose')
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
// var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
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

}, {timestamp: true, versionKey: false})

UserSchema.methods.generateHash = function( password ) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validatePassword = function( password ) {
	return bcrypt.compareSync(password, this.password);
};


UserSchema.pre('save', function(next){
 var user = this;
 if(!user.isModified('password')) return next();
 user.password = userSchema.methods.generateHash(user.password);
 next();
});

module.exports =  mongoose.model('User', UserSchema)
