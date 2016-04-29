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
	}
	
	// profile: {
 //    name: { type: String, default: '' },
 //    gender: { type: String, default: '' },
 //    location: { type: String, default: '' },
 //    website: { type: String, default: '' },
 //    picture: { type: String, default: '' }
 //  	}

}, {timestamp: true});

// Execute before each user.save() call
UserSchema.pre('save', function(callback) {
  var user = this;

  // Break out if the password hasn't changed
  if (!user.isModified('password')) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return callback(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return callback(err);
      user.password = hash;
      callback();
    });
  });
});

//function capable of verifying a password in order to authenticate calls to the API
UserSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

// module.exports = mongoose.model('User', UserSchema);