import { Request, Response } from 'express-serve-static-core'
import { data } from '../data'
import type { ISearchDto } from '../dtos/search.dto'

// Get all products
export const getData = async (
	req: Request<{}, {}, {}, ISearchDto>,
	res: Response
) => {
	try {
		const {email, number} = req.query
		
		const searhByEmail = data.filter(item => item.email === email)

		if (number) {
			const searchByNumber = searhByEmail.filter(item => item.number === +number)

			return res.status(200).send(searchByNumber)
		}

		return res.status(200).send(searhByEmail)
	} catch (error) {
		res.json({
			message: 'Что-то пошло не так.'
		})
	}
}
