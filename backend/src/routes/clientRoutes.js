const express = require("express");

const { createClient, getAllClients, getClientById } = require("../controllers/clientController");
const router = express.Router();

// POST - Save client
router.post("/", createClient);

// GET - Get all clients
router.get("/", getAllClients);

// GET - Get one client by ID
router.get("/:id", getClientById);

module.exports = router;