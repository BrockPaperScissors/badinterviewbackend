require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI =
	process.env.NODE_ENV === 'production'
		? process.env.PRODUCTION_DATABASE_URL
		: process.env.DEVELOPMENT_DATABASE_URL;
const db = mongoose.connection;

mongoose.connect(mongoURI);

db.on('error', (err) => console.log(err.message + 'Failed to connect'));
db.on('connected', () => {
	console.log('Connected to mongo');
});
db.on('disconnected', () => {
	console.log('Disconnected from mongo');
});

db.on('open', () => {
	console.log('mongo connection made');
});

module.exports = mongoose;
