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
        doctor: String, // Doctor name or ID
        cost: Number
    }],
    medicalConditions: [String],
    allergies: [String],
    teethCondition: [{
        toothNumber: String, // 1-32 usually
        condition: String, // e.g., 'Cavity', 'Missing', 'Crown'
        notes: String
    }],
    xrays: [{
        imageUrl: String,
        date: { type: Date, default: Date.now },
        description: String,
        doctor: String
    }],
    treatmentPlan: [{
        treatment: String,
        status: { type: String, enum: ['Proposed', 'Accepted', 'Completed'], default: 'Proposed' },
        estimatedCost: Number,
        notes: String
    }],
    payments: [{
        amount: Number,
        method: String,
        date: { type: Date, default: Date.now },
        purpose: String
    }],
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
