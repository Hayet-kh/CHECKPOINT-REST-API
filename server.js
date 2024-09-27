require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

const uri = process.env.MONGO_URI;
const port = process.env.PORT;
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose
	.connect(uri)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.error("MongoDB connection error:", err);
	});

// Return all users
app.get("/users", async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).send(users);
	} catch (error) {
		res.status(500).send(error);
	}
});

// Add a new user to the database
app.post("/users/add", async (req, res) => {
	try {
		const user = new User(req.body);
		await user.save();
		res.status(201).send(user);
	} catch (error) {
		res.status(400).send(error);
	}
});

// Edit a user by id
app.put("/users/:id", async (req, res) => {
	const { id } = req.params; // Get the id from the request parameters
	const updateData = req.body; // Get the data from the request body

	try {
		const user = await User.findByIdAndUpdate(id, updateData, {
			new: true, // Return the updated user instead of the old one
			runValidators: true, // Run model validations before updating
		});
		if (!user) {
			return res.status(404).send({ message: "User not found" });
		}
		res.status(200).send(user); // Return the updated user
	} catch (error) {
		res.status(400).send(error);
	}
});

// Delete a user by id
app.delete("/users/:id", async (req, res) => {
	const { id } = req.params; // Get the id from the request parameters

	try {
		const user = await User.findByIdAndDelete(id);
		if (!user) {
			return res.status(404).send({ message: "User not found" });
		}
		res.status(200).send(user); // Return the deleted user OR use 204 for returning no content -> res.status(204).send()
	} catch (error) {
		res.status(400).send(error);
	}
});

// Start the server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
