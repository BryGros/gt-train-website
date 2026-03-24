// ENV Variables
require("dotenv").config();

// Required Packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Imports
const connectToDatabase = require("./config/database");
const classInfoRoutes = require("./routes/classInfoRoutes");

// Start App
const app = express();
const PORT = process.env.PORT || 3001;

//Connect to Database
connectToDatabase();

// Middleware to parse JSON request bodies
app.use(express.json());

// CORS Middleware
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};
app.use(cors(corsOptions));

// Routes
app.use("/api/courses", classInfoRoutes);

// Listener
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
