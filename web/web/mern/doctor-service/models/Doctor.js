const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    startTime: {
        type: String, // Format: "HH:mm"
        required: true
    },
    endTime: {
        type: String, // Format: "HH:mm"
        required: true
    },
    maxPatients: {
        type: Number,
        default: 10
    }
});

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    specialization: {
        type: String,
        required: [true, 'Please add a specialization']
    },
    experience: {
        type: Number,
        required: [true, 'Please add years of experience']
    },
    phone: {
        type: String,
        required: [true, 'Please add a phone number']
    },
    schedule: [scheduleSchema],
    isAvailable: {
        type: Boolean,
        default: true
    },
    fees: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Doctor', DoctorSchema);
