const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 4000);
app.get('/', (req, res) => {
	res.redirect('/questions');
});

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const questionController = require('./controllers/Questions');
app.use('/questions', questionController);

const sessionController = require('./controllers/Session');
app.use('/sessions', sessionController);

app.listen(app.get('port'), () => {
	console.log(`PORT: ${app.get('port')}`);
});
