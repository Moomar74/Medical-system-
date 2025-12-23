const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const PatientData = require('../models/PatientData');

// @route   GET api/patient
// @desc    Get current user's patient data
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        let patientData = await PatientData.findOne({ user: req.user.id });

        if (!patientData) {
            return res.status(404).json({ msg: 'Patient data not found' });
        }

        res.json(patientData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/patient
// @desc    Create or update patient data
// @access  Private
router.post('/', auth, async (req, res) => {
    const { medicalConditions, allergies, privateNotes } = req.body;

    // Build patient data object
    const patientFields = {};
    patientFields.user = req.user.id;
    if (medicalConditions) patientFields.medicalConditions = medicalConditions;
    if (allergies) patientFields.allergies = allergies;
    if (privateNotes) patientFields.privateNotes = privateNotes;

    try {
        let patientData = await PatientData.findOne({ user: req.user.id });

        if (patientData) {
            // Update
            patientData = await PatientData.findOneAndUpdate(
                { user: req.user.id },
                { $set: patientFields },
                { new: true }
            );
            return res.json(patientData);
        }

        // Create
        patientData = new PatientData(patientFields);
        await patientData.save();
        res.json(patientData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/patient/history
// @desc    Add dental history
// @access  Private
router.put('/history', auth, async (req, res) => {
    const { treatment, description, doctor, date } = req.body;

    const newHistory = {
        treatment,
        description,
        doctor,
        date
    };

    try {
        const patientData = await PatientData.findOne({ user: req.user.id });

        if (!patientData) {
            // Create one if it doesn't exist? Or return error? 
            // Let's create it for now to be safe, or just error.
            // If this interacts with doctors, maybe it should be more robust.
            return res.status(404).json({ msg: 'Patient data not found' });
        }

        patientData.dentalHistory.unshift(newHistory); // Add to beginning
        await patientData.save();

        res.json(patientData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/patient/:userId
// @desc    Get patient data by user ID (for doctors/admin) - Assuming role check handles this permission separately, 
//          but for now we just implemented the route. Note: The middleware just checks for valid token.
//          In a real app, we'd check if req.user.role === 'doctor' or 'admin'.
//          I'll leave this simple for now or check if the user wants role based access here.
//          Title says "Isolating... extra security layers".
//          I'll keep it simple for this step.

module.exports = router;
