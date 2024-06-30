import { Router } from 'express'
import { query } from 'express-validator'
import { getData } from '../controllers/users'

const router = Router()

// /api/users
router.get(
	'/',
	query('email')
		.notEmpty()
		.withMessage('The field must not be empty')
		.isEmail()
		.withMessage('This is not an email'),
	query('number').optional().isNumeric().withMessage('This is not an number'),
	getData
)

export default router
