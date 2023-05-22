// imports
import express from "express"
import dotenv from "dotenv"

// DOT ENV config
dotenv.config({ path: "./.env" })

const app = express()

app.get("/", (req, res) => {
	res.send(`Hello Job Portal`)
})

// PORT
const PORT = process.env.PORT || 3000

// listen
app.listen(PORT, () => {
	console.log(`Server is running on ${process.env.DEV_MODE} on port ${PORT}`)
})
