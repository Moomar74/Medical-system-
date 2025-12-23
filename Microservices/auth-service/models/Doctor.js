// auth-service/models/Doctor.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    specialty: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'doctor' },
    phone: { type: String },
    active: { type: Boolean, default: true },
    avatar: { type: String },
    profilePicture: { type: String, default: null }, // Stores base64 image
    availability: {
        days: [{ type: String }],
        startTime: { type: String },
        endTime: { type: String }
    }
}, { timestamps: true });

// We must reimplement the pre-save hook and methods because they are logic, not just schema definition
doctorSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

doctorSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('Doctor', doctorSchema);
