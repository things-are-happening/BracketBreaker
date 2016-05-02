var mongoose = require('mongoose')

var Schema = mongoose.Schema

var match = new Schema({
	// round: Array,
	// score: Number,
	// date: Date,
	// teams:{
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'Team'
	// }
// },{timestamp: true, versionKey: false

	teamOne: String,
	teamOneScore: Number,
	teamTwo: String,
	teamTwoScore: Number

})


module.exports = mongoose.model('Match', match)
