const express = require("express");
const cors = require("cors");
const path = require("path");

const adminRoutes = require("./routes/adminRoutes");
const clientRoutes = require("./routes/clientRoutes");
const projectRoutes = require("./routes/projectRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Uploaded project images
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Home API
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Solar Backend API is running"
  });
});

// Admin APIs
app.use("/api/admin", adminRoutes);

// Client APIs
app.use("/api/clients", clientRoutes);

// Project APIs
app.use("/api/projects", projectRoutes);

// Error Middleware
app.use(errorMiddleware);

module.exports = app;