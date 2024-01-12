import express from 'express';
import mongoose from 'mongoose';
import { registerValidation, loginValidation } from './validations.js';
import checkAuth from './utils/checkAuth.js';

import * as UserController from './controllers/UserController.js';

mongoose
	.connect(
		'mongodb+srv://kramarenko:LM2CYJ54Kj5LHAut@cluster0.g5xktzq.mongodb.net/blog'
	)
	.then(() => console.log('DB OK'))
	.catch(err => console.log('DB ERROR', err));

const app = express();

app.use(express.json());

app.post('/auth/login', loginValidation, UserController.login);

app.get('/auth/me', checkAuth, UserController.getMe);

app.post('/auth/register', registerValidation, UserController.register);

app.listen(4444, err => {
	if (err) {
		return console.log(err);
	}

	console.log('Server OK');
});
