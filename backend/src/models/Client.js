const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true
    },

    whatsapp: {
      type: String,
      required: [true, "WhatsApp number is required"],
      trim: true
    },

    solarPlantType: {
      type: String,
      required: [true, "Solar plant type is required"],
      enum: [
        "Residential",
        "Commercial",
        "Industrial",
        "Other"
      ]
    },

    state: {
      type: String,
      required: [true, "State is required"],
      enum: [
        "Andhra Pradesh",
        "Telengana",
      ]
    },

    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;