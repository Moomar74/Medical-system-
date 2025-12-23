const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

// @desc    Get all doctors
// @route   GET /api/doctors
// @access  Public
router.get('/', async (req, res) => {
    try {
        let query = {};

        // Filter by specialization
        if (req.query.specialization) {
            query.specialization = req.query.specialization;
        }

        // Filter by availability (day)
        if (req.query.day) {
            query['schedule.day'] = req.query.day;
        }

        const doctors = await Doctor.find(query);
        res.status(200).json({ success: true, count: doctors.length, data: doctors });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// @desc    Get single doctor
// @route   GET /api/doctors/:id
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }
        res.status(200).json({ success: true, data: doctor });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// @desc    Create new doctor
// @route   POST /api/doctors
// @access  Public/Admin (Should be protected)
router.post('/', async (req, res) => {
    try {
        const doctor = await Doctor.create(req.body);
        res.status(201).json({ success: true, data: doctor });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// @desc    Update doctor profile
// @route   PUT /api/doctors/:id
// @access  Private
router.put('/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }
        res.status(200).json({ success: true, data: doctor });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// @desc    Update doctor schedule
// @route   PUT /api/doctors/:id/schedule
// @access  Private
router.put('/:id/schedule', async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }

        doctor.schedule = req.body.schedule;
        await doctor.save();

        res.status(200).json({ success: true, data: doctor });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

module.exports = router;
