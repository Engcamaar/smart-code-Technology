const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const auth = require('../middleware/auth');

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @route   POST /api/projects
// @desc    Create a new project
// @access  Private (Needs auth)
router.post('/', auth, async (req, res) => {
    const { title, description, imageUrl, category, tags, projectUrl } = req.body;

    const project = new Project({
        title,
        description,
        imageUrl,
        category,
        tags,
        projectUrl
    });

    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
