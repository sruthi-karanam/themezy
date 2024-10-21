// Organizer routes
const express = require('express');
const { registerOrganizer, getAllOrganizers } = require('../controllers/organizerController');

const router = express.Router();

router.post('/', registerOrganizer);
router.get('/', getAllOrganizers);

module.exports = router;
