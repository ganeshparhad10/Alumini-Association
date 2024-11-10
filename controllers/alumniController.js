const Profile = require('../models/Profile');
const Donation = require('../models/Donation');
const Job = require('../models/Job'); // Create if needed

exports.getDashboard = (req, res) => {
    res.render('alumni/dashboard');
};

exports.postJob = async (req, res) => {
    const job = new Job({
        title: req.body.title,
        description: req.body.description,
        requirements: req.body.requirements,
        postedBy: req.user._id,
    });
    await job.save();
    res.redirect('/alumni/dashboard');
};

exports.donate = async (req, res) => {
    const donation = new Donation({
        donor: req.user._id,
        amount: req.body.amount,
        type: req.body.type,
        description: req.body.description,
    });
    await donation.save();
    res.redirect('/alumni/dashboard');
};
