const express = require("express");

const {
  registerAdmin,
  loginAdmin
} = require("../controllers/adminController");

const router = express.Router();

// Create admin
router.post("/register", registerAdmin);

// Login admin
router.post("/login", loginAdmin);

module.exports = router;