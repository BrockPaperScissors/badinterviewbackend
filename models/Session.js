const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
	sessionId: { type: Number, require: true },
	sessionName: { type: String, require: true },
	numQuestions: { type: Number, require: true },
	questions: [Object],
	responses: [String],
});

const Session = mongoose.model('Session', SessionSchema);

module.exports = Session;
