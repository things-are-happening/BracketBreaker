<<<<<<< HEAD
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
		required: true
	},

}, {timestamp: true, versionKey: false})

userSchema.methods.generateHash = function( password ) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validatePassword = function( password ) {
=======
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var User = Schema({

	  username: {type: String, required: true, unique:true},
    password: {type: String, required: true}

});


///////////bcrypt/////////////
User.methods.generateHash = function( password ) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validatePassword = function( password ) {
>>>>>>> b909fa979be941d1293523594997b7b154a530e2
	return bcrypt.compareSync(password, this.password);
};


<<<<<<< HEAD
userSchema.pre('save', function(next){
 var user = this;
 if(!user.isModified('password')) return next();
 user.password = userSchema.methods.generateHash(user.password);
 next();
});

module.exports =  mongoose.model('User', userSchema)
=======
/////////////saves hashed pw, not real pw///////////////
User.pre('save', function(next){
 var user = this;
 if(!user.isModified('password')) return next();
 user.password = User.methods.generateHash(user.password);
 next();
});

module.exports = mongoose.model('User', User);
>>>>>>> b909fa979be941d1293523594997b7b154a530e2
