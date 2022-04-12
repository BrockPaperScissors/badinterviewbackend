const express = require('express');
const app = express();
const cors = require('cors');

app.get('/', (req, res) => {
	res.redirect('/home');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(4000, () => {
	console.log('app listening on port 4000');
});
