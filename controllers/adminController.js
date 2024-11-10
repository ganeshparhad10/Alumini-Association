const Event = require('../models/Event');
const Donation = require('../models/Donation');

exports.getDashboard = (req, res) => {
    res.render('admin/dashboard');
};

exports.createEvent = async (req, res) => {
    const event = new Event({
        name: req.body.name,
        date: req.body.date,
        description: req.body.description,
        type: req.body.type,
    });
    await event.save();
    res.redirect('/admin/dashboard');
};

exports.viewDonations = async (req, res) => {
    const donations = await Donation.find();
    res.render('admin/donations', { donations });
};
