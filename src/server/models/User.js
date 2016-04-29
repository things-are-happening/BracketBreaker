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
	return bcrypt.compareSync(password, this.password);
};


userSchema.pre('save', function(next){
 var user = this;
 if(!user.isModified('password')) return next();
 user.password = userSchema.methods.generateHash(user.password);
 next();
});

module.exports =  mongoose.model('User', userSchema)
