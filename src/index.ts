import { debounce } from './utils/debounce'
import express from 'express'
import cors from 'cors'

import usersRoute from './routes/users'

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/users', debounce(usersRoute, 5000))

const start = async () => {
	try {
		app.listen(4200, () => {
			console.log(`Running on PORT ${4200}`)
		})
	} catch (error) {
		console.log(error)
	}
}

start()

export default app
