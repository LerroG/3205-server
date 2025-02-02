import type { Request, Response, NextFunction } from 'express-serve-static-core'
import { validationResult } from 'express-validator'
import { data } from '../data'
import type { ISearchDto } from '../dtos/search.dto'

export const getData = async (
	req: Request<{}, {}, {}, ISearchDto>,
	res: Response,
	next: NextFunction
) => {
	try {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return next(res.send({ errors: errors.array() }))
		}

		const { email, number } = req.query

		const searhByEmail = data.filter(item => item.email === email)

		if (number) {
			const searchByNumber = searhByEmail.filter(item =>
				Number(item.number.toString().includes(number.toString()))
			)

			return res.status(200).send(searchByNumber)
		}

		return res.status(200).send(searhByEmail)
	} catch (error) {
		res.json({
			message: 'Что-то пошло не так.'
		})
	}
}
