// imports
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"

// DOT ENV config
dotenv.config({ path: "./.env" })

const app = express()

app.get("/", (req, res) => {
	res.send(`Hello Job Portal`)
})

// PORT
const PORT = process.env.PORT || 3000

// listen and connect to DB
const server = async () => {
	try {
		// mongodb connections
		await connectDB()
		app.listen(PORT, () => {
			console.log(
				`Server is running on ${process.env.DEV_MODE} on port ${PORT}`
			)
		})
	} catch (error) {
		console.log(`Internal Server Error`)
	}
}
server()
