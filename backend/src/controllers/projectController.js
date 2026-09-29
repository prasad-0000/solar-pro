const Project = require("../models/Project");

// POST - Add New Project
const createProject = async (req, res, next) => {
  try {
    const {
      category,
      title,
      description,
      location,
      capacity
    } = req.body || {};

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    // Validate photo
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Project photo is required"
      });
    }

    // Validate required fields
    if (!category || !title || !description) {
      return res.status(400).json({
        success: false,
        message: "Category, title and description are required"
      });
    }

    const project = await Project.create({
      photo: req.file.path?.startsWith("http")
        ? req.file.path
        : `/uploads/projects/${req.file.filename}`,
      category,
      title,
      description,
      location,
      capacity
    });

    return res.status(201).json({
      success: true,
      message: "Project added successfully",
      data: project
    });

  } catch (error) {
    next(error);
  }
};


// GET - Get All Projects
const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({
      createdAt: -1
    });

    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });

  } catch (error) {
    next(error);
  }
};


// GET - Get Project By ID
const getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: project
    });

  } catch (error) {
    next(error);
  }
};


module.exports = {
  createProject,
  getAllProjects,
  getProjectById
};
