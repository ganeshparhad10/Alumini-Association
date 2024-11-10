const express = require('express');
const router = express.Router();
const alumniController = require('../controllers/alumniController');
const auth = require('../config/auth');

router.get('/dashboard', auth.verifyToken, auth.verifyRole('alumni'), alumniController.getDashboard);
router.post('/post-job', auth.verifyToken, auth.verifyRole('alumni'), alumniController.postJob);
router.post('/donate', auth.verifyToken, auth.verifyRole('alumni'), alumniController.donate);

module.exports = router;
