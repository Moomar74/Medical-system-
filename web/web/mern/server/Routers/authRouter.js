const express = require('express');
const router = express.Router();
const { signup, login, getProfile, updateProfile, createDoctor, deleteDoctor , forgotPassword, resetPassword } = require('../Controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, updateProfile);
router.post('/doctor', authMiddleware, createDoctor);
router.delete('/doctor/:doctorId', authMiddleware, deleteDoctor);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

module.exports = router;