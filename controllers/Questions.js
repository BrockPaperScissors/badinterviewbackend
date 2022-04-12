const express = require('express');
const Question = require('../db/models/Questions');
const router = express.Router();

router.get('/', (req, res) => {
	Question.find({}).then((inquiry) => {
		res.json(inquiry);
	});
});
