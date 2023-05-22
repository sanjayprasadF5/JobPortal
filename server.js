// package import
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"

// file import
import connectDB from "./config/db.js"
import testRouter from "./routes/testRoutes.js"
import authRouter from "./routes/authRoutes.js"
// DOT ENV config
dotenv.config({ path: "./.env" })

const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// routes
app.use("/api/v1/test", testRouter)
app.use("/api/v1/auth", authRouter)

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
