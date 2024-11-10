const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bio: {
        type: String,
        default: ''
    },
    graduationYear: {
        type: Number,
        required: true
    },
    skills: {
        type: [String],
        default: []
    },
    location: {
        type: String,
        default: ''
    },
    website: {
        type: String,
        default: ''
    }
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);
