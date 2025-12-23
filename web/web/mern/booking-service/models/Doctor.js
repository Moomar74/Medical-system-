// booking-service/models/Doctor.js

const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    specialty: { type: String, required: true },
    role: { type: String, default: 'doctor' },
    active: { type: Boolean, default: true },
    availability: {
        days: [{ type: String }],
        startTime: { type: String },
        endTime: { type: String }
    }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
