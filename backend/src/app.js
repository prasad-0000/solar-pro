const express = require("express");
const cors = require("cors");
const path = require("path");

const adminRoutes = require("./routes/adminRoutes");
const clientRoutes = require("./routes/clientRoutes");
const projectRoutes = require("./routes/projectRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "https://heliossolor.netlify.app",      //  ADD YOUR NETLIFY URL
      "https://solar-pro-digf.onrender.com"   //  NEW RENDER URL
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/uploads",
  express.static(path.join(__dirname, "../uploads"))
);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Solar Backend API is running"
  });
});

app.use("/api/admin", adminRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/projects", projectRoutes);

app.use(errorMiddleware);

module.exports = app;