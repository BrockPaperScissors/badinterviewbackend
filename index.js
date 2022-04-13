const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 4000);
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

app.listen(app.get('port'), () => {
	console.log(`PORT: ${app.get('port')}`);
});
