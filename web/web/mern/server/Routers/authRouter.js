const express = require('express');
const { signup, login } = require('../Controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../Models/User');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

// Example protected route
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;