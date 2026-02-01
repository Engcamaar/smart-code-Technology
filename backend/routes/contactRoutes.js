const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Submit a contact form message
// @access  Public
router.post('/', async (req, res) => {
    const { name, email, message, phone } = req.body;

    const contactMsg = new Contact({
        name,
        email,
        message,
        phone
    });

    try {
        const newContact = await contactMsg.save();
        res.status(201).json({ message: 'Message sent successfully!', data: newContact });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
