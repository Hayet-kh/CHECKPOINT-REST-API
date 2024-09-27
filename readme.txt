REST API

Objective
The goal of this exercise is to practice creating a REST API using Node.js, Express, and Mongoose. You will implement various CRUD operations to interact with a MongoDB database.

Instructions

    1. Project Setup : Start a new Node.js project.

    2. Install Dependencies : Install the necessary packages for Express, Mongoose, and dotenv.

    3. Configure Environment Variables : Create a .env file in a config folder to store your environment variables, including the MongoDB connection string.

    4. Set Up Express Server : Create a server.js file to configure and launch your Express server.

    5. Connect to MongoDB : Establish a connection to a MongoDB database, which can be done locally or using MongoDB Atlas.

    6. Folder Structure : Ensure your project follows the specified folder structure, which includes a config folder with a .env file, a models folder for your data models, and the main server.js file.
        config/ .env
        models/ user.js
        server.js

    7. Create User Model : Within the models folder, create a User.js file. Define a Mongoose schema for users and export the model for use in your server.

    8. Implement Routes : In your server.js file, implement the following routes:
        - GET: Retrieve all users from the database.
        - POST: Add a new user to the database.
        - PUT: Update an existing user by their ID.
        - DELETE: Remove a user from the database by their ID.

    9. Use Mongoose Methods : In each route's handler, utilize Mongoose methods to interact with the database, ensuring that you return the appropriate responses.

    10. Testing : Test each route using Postman to verify that the API behaves as expected.

    11. Code Comments : Comment your code to clarify its functionality and logic before submitting the exercise.