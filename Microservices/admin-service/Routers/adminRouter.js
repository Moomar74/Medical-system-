const express = require('express');
const router = express.Router();
const {
    createDoctor,
    deleteDoctor,
    getAllAppointments,
    updateAppointmentStatus
} = require('../Controllers/adminController');
const adminAuth = require('../middleware/adminAuth');

// All routes here require admin authentication
router.use(adminAuth);

// Doctor routes
router.post('/doctors', createDoctor);
router.delete('/doctors/:doctorId', deleteDoctor);

// Appointment routes
router.get('/appointments', getAllAppointments);
router.patch('/appointments/:id/status', updateAppointmentStatus);

module.exports = router;
