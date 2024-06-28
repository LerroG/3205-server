import express from 'express'

import usersRoute from './routes/users'

const app = express()

// Middlewares
app.use(express.json())

// Routes
app.use('/api/users', usersRoute)

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
