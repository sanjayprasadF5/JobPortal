import mongoose from "mongoose"

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URL)
		console.log(`Connected to Database`)
	} catch (error) {
		console.log(`Mongoose Error ${error}`)
	}
}

export default connectDB
