// const express = require("express")
import express from "express"
const app = express()

app.get("/", (req, res) => {
	res.send(`Hello Job Portal`)
})

app.listen(8080, () => {
	console.log(`Server is running on port 8080`)
})
