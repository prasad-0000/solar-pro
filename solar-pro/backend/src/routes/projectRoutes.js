const express = require("express");

const { createProject, getAllProjects, getProjectById } = require("../controllers/projectController");
const upload = require("../middleware/uploadMiddleware");
const router = express.Router();


// POST - Add Project with Photo
router.post("/", upload.single("photo"), createProject);

// GET - All Projects
router.get("/", getAllProjects);

// GET - Single Project
router.get("/:id", getProjectById);

module.exports = router;