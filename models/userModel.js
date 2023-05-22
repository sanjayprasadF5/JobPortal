import mongoose from "mongoose"
import validator from "validator"

// schema
const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is Required"],
		},
		lastname: {
			type: String,
		},
		email: {
			type: String,
			required: [true, "Email is Required"],
			unique: true,
			validate: validator.isEmail,
		},
		password: {
			type: String,
			required: [true, "Password is Required"],
			minlength: [6, "Minimum 6 length character should be there"],
		},
		location: {
			type: String,
			default: "mumbai",
		},
	},
	{ timestamps: true }
)

export default mongoose.model("User", userSchema)
