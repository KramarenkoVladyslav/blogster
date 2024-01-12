import { body } from 'express-validator'

export const loginValidation = [
	body('email', 'Invalid email format').isEmail(),
	body('password', 'Password must contain at least 5 characters').isLength({min: 5,})
];

export const registerValidation = [
	body('email', 'Invalid email format').isEmail(),
	body('password', 'Password must contain at least 5 characters').isLength({min: 5,}),
	body('fullName', 'Fullname is requaired and must be a valid name').isLength({ min: 3 }),
	body('avatarUrl', 'Incorrect avatar link').optional().isURL(),
];

export const postCreateValidation = [
	body('title', 'Enter the title of the article').isLength({ min: 3 }).isString(),
	body('text', 'Enter the text of the article').isLength({ min: 10 }).isString(),
	body('tags', 'Invalid tags format (specify array)').optional().isString(),
	body('imageUrl', 'Incorrect image link').optional().isString(),
];


