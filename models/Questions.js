const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const QuestionsSchema = new Schema({
	subject: String,
	body: String,
});

const Question = mongoose.model('Question', QuestionsSchema);

module.exports = Question;
