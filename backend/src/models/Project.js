const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      required: [true, "Project photo is required"]
    },

    category: {
      type: String,
      required: [true, "Project category is required"],
      enum: ["Residential", "Commercial", "Industrial"]
    },

    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true
    },

    description: {
      type: String,
      required: [true, "Project description is required"],
      trim: true
    },

    location: {
      type: String,
      trim: true
    },

    capacity: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;