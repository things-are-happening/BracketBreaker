var mongoose = require('mongoose')

var Schema = mongoose.Schema

var match = new Schema({
	round: Array,
	team1Score: Number,
	team2Score: Number,
	date: Date
},{timestamp: true, versionKey: false})


module.exports = mongoose.model('Match', match)