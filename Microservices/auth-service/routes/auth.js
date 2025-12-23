const express = require('express');
const router = express.Router();
const { signup, login, verify } = require('../controllers/authController');

// @route   POST api/auth/signup
// @desc    Register user
// @access  Public
router.post('/signup', signup);

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', login);

// @route   GET api/auth/verify
// @desc    Verify token and return user info
// @access  Private (requires token in header)
router.get('/verify', verify);

module.exports = router;
