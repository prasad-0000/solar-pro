const Client = require("../models/Client");

// POST - Create New Client - /api/clients
const createClient = async (req, res, next) => {
  try {
    const {
      fullName,
      email,
      whatsapp,
      solarPlantType,
      state,
      address
    } = req.body;

    // Validation
    if (!fullName || !email || !whatsapp || !solarPlantType || !state || !address) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // Create client
    const client = await Client.create({
      fullName,
      email,
      whatsapp,
      solarPlantType,
      state,
      address
    });

    return res.status(201).json({
      success: true,
      message: "Client details submitted successfully",
      data: client
    });

  } catch (error) {
    next(error);
  }
};

// GET - Get All Clients - /api/clients
const getAllClients = async (req, res, next) => {
  try {
    const clients = await Client.find().sort({
      createdAt: -1
    });

    return res.status(200).json({
      success: true,
      count: clients.length,
      data: clients
    });

  } catch (error) {
    next(error);
  }
};

// GET - Get Client By ID - /api/clients/:id
const getClientById = async (req, res, next) => {
  try {
    const client = await Client.findById(req.params.id);

    if (!client) {
      return res.status(404).json({
        success: false,
        message: "Client not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: client
    });

  } catch (error) {
    next(error);
  }
};


module.exports = {
  createClient,
  getAllClients,
  getClientById
};