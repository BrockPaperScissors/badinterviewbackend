require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.DATABASE_URL;

mongoose
	.connect(mongoURI)
	.then((conn) => {
		console.log(
			`connected to MongoDB Atlas on ${conn.connections[0].name} database. `
		);
	})
	.catch((err) => {
		console.log(err);
	});

module.exports = mongoose;
