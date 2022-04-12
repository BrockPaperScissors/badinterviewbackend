const mongoose = require('../connection');
const Schema = mongoose.Schema;

const QuestionsSchema = new Schema({
	subject: String,
	body: String,
	response: String,
});

const Question = mongoose.model('Question', QuestionsSchema);

module.exports = Question;
