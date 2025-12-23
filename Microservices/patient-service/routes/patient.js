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
// @desc    Get patient data by User ID (for doctors/admin)
// @access  Private (Doctor/Admin)
router.get('/:userId', auth, async (req, res) => {
    try {
        const patientData = await PatientData.findOne({ user: req.params.userId });
        if (!patientData) {
            return res.status(404).json({ msg: 'Patient data not found' });
        }
        res.json(patientData);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Patient data not found' });
        }
        res.status(500).send('Server Error');
    }
});

// @route   POST api/patient/:userId/treatment
// @desc    Add treatment record
router.post('/:userId/treatment', auth, async (req, res) => {
    try {
        const patientData = await PatientData.findOne({ user: req.params.userId });
        if (!patientData) return res.status(404).json({ msg: 'Patient not found' });

        patientData.dentalHistory.unshift(req.body);
        await patientData.save();
        res.json(patientData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/patient/:userId/medical
// @desc    Update medical info
router.put('/:userId/medical', auth, async (req, res) => {
    try {
        const patientData = await PatientData.findOneAndUpdate(
            { user: req.params.userId },
            { $set: { medicalConditions: req.body.medicalConditions, allergies: req.body.allergies, privateNotes: req.body.privateNotes } },
            { new: true }
        );
        res.json(patientData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/patient/:userId/teeth
// @desc    Update teeth condition
router.put('/:userId/teeth', auth, async (req, res) => {
    try {
        const patientData = await PatientData.findOne({ user: req.params.userId });
        if (!patientData) return res.status(404).json({ msg: 'Patient not found' });

        // Replace or merge? Usually replace the whole array or specific tooth. 
        // For simplicity, let's assume body contains the full array or we append.
        // If it's a specific tooth update:
        // But for now, let's just push/update.
        // If body is array:
        if (Array.isArray(req.body)) {
            patientData.teethCondition = req.body;
        } else {
            patientData.teethCondition.push(req.body);
        }
        await patientData.save();
        res.json(patientData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/patient/:userId/xray
// @desc    Add X-ray
router.post('/:userId/xray', auth, async (req, res) => {
    try {
        const patientData = await PatientData.findOne({ user: req.params.userId });
        if (!patientData) return res.status(404).json({ msg: 'Patient not found' });

        patientData.xrays.unshift(req.body);
        await patientData.save();
        res.json(patientData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/patient/:userId/plan
// @desc    Update treatment plan
router.put('/:userId/plan', auth, async (req, res) => {
    try {
        const patientData = await PatientData.findOne({ user: req.params.userId });
        if (!patientData) return res.status(404).json({ msg: 'Patient not found' });

        if (Array.isArray(req.body)) {
            patientData.treatmentPlan = req.body;
        } else {
            patientData.treatmentPlan.unshift(req.body);
        }
        await patientData.save();
        res.json(patientData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/patient/:userId/payment
// @desc    Add payment
router.post('/:userId/payment', auth, async (req, res) => {
    try {
        const patientData = await PatientData.findOne({ user: req.params.userId });
        if (!patientData) return res.status(404).json({ msg: 'Patient not found' });

        patientData.payments.unshift(req.body);
        await patientData.save();
        res.json(patientData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
