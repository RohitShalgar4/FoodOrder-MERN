const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Function to connect to MongoDB
const connectDatabase = () => {
  mongoose.connect(process.env.DB_LOCAL_URI, {})
    .then((connection) => {
      console.log("MongoDB Database connected with HOST: " + connection.connection.host);
    })
    .catch(err => {
      console.error("Database connection error: " + err.message);
    });
};

// Export the connectDatabase function
module.exports = connectDatabase;
