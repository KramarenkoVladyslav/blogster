import { body } from 'express-validator'

export const registerValidation = [
	body('email', 'Invalid email format').isEmail(),
	body('password', 'Password must contain at least 5 characters').isLength({min: 5,}),
	body('fullName', 'Fullname is requaired and must be a valid name').isLength({ min: 3 }),
	body('avatarUrl', 'Incorrect avatar link').optional().isURL(),
];