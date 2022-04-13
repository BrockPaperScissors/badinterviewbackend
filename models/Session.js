const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
	sessionName: { type: String, require: true },
	numQuestions: { type: Number, require: true },
	questions: [String],
	responses: [String],
});

const Session = mongoose.model('Session', SessionSchema);

module.exports = Session;
