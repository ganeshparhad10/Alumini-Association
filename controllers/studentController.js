const User = require('../models/User');

exports.dashboard = (req, res) => {
    res.json({ msg: 'Welcome to the student dashboard' });
};

exports.viewAlumniProfiles = async (req, res) => {
    try {
        const alumniProfiles = await User.find({ role: 'alumni' });
        res.json(alumniProfiles);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.requestMentorship = (req, res) => {
    res.json({ msg: 'Mentorship request received' });
};

exports.exploreJobs = (req, res) => {
    res.json({ msg: 'Explore job opportunities here' });
};
