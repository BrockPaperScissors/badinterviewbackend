const mongoose = require('./connection');
const seedData = require('./questions.json');
const Question = require('../models/Questions');

Question.deleteMany({})
	.then(() => {
		Question.insertMany(seedData).then((question) => {
			console.log('we have questions');
			console.log(question);
			process.exit();
		});
	})
	.catch((err) => console.error(err));
