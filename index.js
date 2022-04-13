const express = require('express');
const app = express();
const cors = require('cors');

app.get('/', (req, res) => {
	res.redirect('/home');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const questionController = require('./controllers/Questions');
app.use('/questions', questionController);

const sessionController = require('./controllers/Session');
app.use('/sessions', sessionController);

app.listen(4000, () => {
	console.log('app listening on port 4000');
});
