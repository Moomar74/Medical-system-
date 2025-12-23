const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
    getAppointments,
    createAppointment,
    deleteAppointment,
    getDoctorAppointments,
    getDoctors,
    updateAppointment
} = require('../controllers/appointmentController');

// @route   GET api/appointment/my-appointments
// @desc    Get all appointments for the current user
// @access  Private
router.get('/my-appointments', auth, getAppointments);

// @route   GET api/appointment/doctor/:doctorId
// @desc    Get all appointments for a specific doctor
// @access  Public (or Private depending on requirements, usually public for checking availability)
router.get('/doctor/:doctorId', getDoctorAppointments);

// @route   GET api/appointment/doctors
// @desc    Get all doctors
// @access  Public
router.get('/doctors', getDoctors);

// @route   POST api/appointment/create
// @desc    Create a new appointment
// @access  Private
router.post('/create', auth, createAppointment);

// @route   DELETE api/appointment/:id
// @desc    Delete an appointment
// @access  Private
router.delete('/:id', auth, deleteAppointment);

// @route   PUT api/appointment/:id
// @desc    Update an appointment (e.g. reschedule or status change)
// @access  Private
router.put('/:id', auth, updateAppointment);

module.exports = router;
