const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const auth = require('../config/auth');

router.get('/dashboard', auth.verifyToken, auth.verifyRole('student'), studentController.dashboard);
router.get('/alumni', auth.verifyToken, auth.verifyRole('student'), studentController.viewAlumniProfiles);
router.post('/request-mentorship', auth.verifyToken, auth.verifyRole('student'), studentController.requestMentorship);
router.get('/jobs', auth.verifyToken, auth.verifyRole('student'), studentController.exploreJobs);

module.exports = router;
