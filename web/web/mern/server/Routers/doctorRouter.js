const express = require('express');
const router = express.Router();
const { setAvailability } = require('../Controllers/doctorController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/availability', authMiddleware, setAvailability);

module.exports = router;