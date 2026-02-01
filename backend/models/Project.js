const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        default: 'https://via.placeholder.com/800x600?text=Project+Image'
    },
    category: {
        type: String,
        enum: ['Web Development', 'Mobile App', 'Cloud Solutions', 'UI/UX', 'Other'],
        default: 'Other'
    },
    tags: [{
        type: String
    }],
    projectUrl: {
        type: String
    },
    caseStudyUrl: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Project', ProjectSchema);
