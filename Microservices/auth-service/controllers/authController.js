const User = require('../models/User');
const Doctor = require('../models/Doctor');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        // Input validation
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Name, email, and password are required' });
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }
        if (password.length < 8) {
            return res.status(400).json({ message: 'Password must be at least 8 characters' });
        }
        if (!['user', 'admin'].includes(role)) {
            return res.status(400).json({ message: 'Invalid role specified' });
        }

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        user = new User({ name, email, password, role });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = { user: { id: user._id, role: user.role, name: user.name, email: user.email } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({
            token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role },
        });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Input validation
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // First check user collection
        let user = await User.findOne({ email });
        let doctorData = null;

        // If not in users collection, check doctors collection
        if (!user) {
            doctorData = await Doctor.findOne({ email });
            if (!doctorData) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            // Check doctor password
            // Use the method defined in Doctor model if available, else manual compare
            const isMatch = await doctorData.isValidPassword(password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            // Create payload for doctor
            const payload = {
                user: {
                    id: doctorData._id,
                    role: 'doctor',
                    name: doctorData.name,
                    email: doctorData.email,
                    specialty: doctorData.specialty
                }
            };

            // Generate token
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

            // Store doctorId directly in localStorage logic from original code maintained in response structure
            return res.json({
                token,
                user: {
                    id: doctorData._id,
                    name: doctorData.name,
                    email: doctorData.email,
                    role: 'doctor',
                    specialty: doctorData.specialty,
                    isDirectDoctor: true
                },
                doctorId: doctorData._id
            });
        }

        // Regular user login
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const payload = { user: { id: user._id, role: user.role, name: user.name, email: user.email } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({
            token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role },
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.verify = async (req, res) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Return the decoded user info
        // This allows the client to verify the token is valid and get user details
        res.json({ valid: true, user: decoded.user });
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid', valid: false });
    }
};
