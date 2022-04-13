const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const Question = require('../models/Questions');
const router = express.Router();

router.get('/', (req, res) => {
	Question.find({}).then((inquiry) => {
		res.json(inquiry);
		console.log(inquiry);
	});
});

router.get('/:id', (req, res) => {
	Question.findById({ _id: req.params.id }).then((question) => {
		res.json(question);
	});
});

router.get('/:subject', (req, res) => {
	Question.find({ subject: req.params.subject }).then((questions) => {
		res.json(questions);
	});
});

router.post('/', (req, res) => {
	const newQuestion = req.body;
	Question.create(newQuestion).then((question) => {
		res.json(question);
	});
});

router.put('/:id', async (req, res) => {
	try {
		const updatedQuestion = req.body;
		const updatedDocument = await Question.findByIdAndUpdate(
			req.params.id,
			updatedQuestion,
			{ new: true }
		);
		res.json(updatedDocument);
	} catch (error) {
		console.log(error);
	}
});

router.delete('/:id', (req, res) => {
	Question.findByIdAndDelete({ _id: req.params.id }).then((deleteQ) => {
		res.json(deleteQ);
	});
});
module.exports = router;
