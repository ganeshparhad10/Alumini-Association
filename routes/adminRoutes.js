const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../config/auth');

router.get('/dashboard', auth.verifyToken, auth.verifyRole('admin'), adminController.getDashboard);
router.get('/manage-events', auth.verifyToken, auth.verifyRole('admin'), (req, res) => res.render('admin/manageEvents'));
router.post('/create-event', auth.verifyToken, auth.verifyRole('admin'), adminController.createEvent);
router.get('/view-donations', auth.verifyToken, auth.verifyRole('admin'), adminController.viewDonations);

module.exports = router;
