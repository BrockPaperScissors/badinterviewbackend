const mongoose = require('../connection');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
	name: String,
	numQuestions: Number,
	questions: Array,
});

const Session = mongoose.model('Session', SessionSchema);

module.exports = Session;
