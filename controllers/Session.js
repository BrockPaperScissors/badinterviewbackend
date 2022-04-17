const express = require('express');
const router = express.Router();
const Session = require('../models/Session');

router.post('/', (req, res) => {
	const newSession = req.body;
	console.log('logging newsession', newSession);
	Session.create(req.body).then((session) => {
		console.log('logging session', session);
		res.json(session);
	});
});

router.get('/', (req, res) => {
	Session.find({}).then((inquiry) => {
		res.json(inquiry);
		console.log(inquiry);
	});
});

router.get('/:id', (req, res) => {
	Session.findById({ _id: req.params.id }).then((sesh) => {
		res.json(sesh);
	});
});

router.delete('/:id', (req, res) => {
	Session.findByIdAndDelete({ _id: req.params.id }).then((deleteSesh) => {
		res.json(deleteSesh);
	});
});

module.exports = router;
