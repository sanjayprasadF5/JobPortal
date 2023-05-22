const testController2 = (req, res) => {
	res.send(`I m from Routes11`)
}

const testController1 = (req, res) => {
	const { name } = req.body
	res.status(200).send(`Your Name is ${name}`)
}

// export
export const testController = { testController1, testController2 }
