const mongoose = require('mongoose');

const PatientDataSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dentalHistory: [{
        treatment: String,
        description: String,
        date: {
            type: Date,
            default: Date.now
        },
        doctor: String
    }],
    medicalConditions: [String],
    allergies: [String],
    privateNotes: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('PatientData', PatientDataSchema);
