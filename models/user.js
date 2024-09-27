const mongoose = require("mongoose");
const validator = require("validator");

// Create a schema for the user
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate: (value) => {
			return validator.isEmail(value);
		},
	},
	phoneNumber: { type: Number, required: true },
	age: { type: Number, required: true },
});

// Create a model for the user
const User = mongoose.model("User", userSchema);

// Export the model
module.exports = User;
