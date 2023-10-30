import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose.connect(
	'mongodb+srv://kramarenko:LM2CYJ54Kj5LHAut@cluster0.g5xktzq.mongodb.net/')
.then(() => console.log('DB OK'))
.catch((err) => console.log('DB ERROR', err));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.post('/auth/login', (req, res) => {
	console.log(req.body);

	const token = jwt.sign(
		{
			email: req.body.email,
			fullname: 'Vladyslav',
		},
		'secret123'
	);
	res.json({
		success: true,
		token,
	});
});

app.listen(4444, err => {
	if (err) {
		return console.log(err);
	}

	console.log('Server OK');
});
