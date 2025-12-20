const User = require('../Models/User');
const Doctor = require('../Models/Doctor');
const Appointment = require('../Models/Appointment');

// Doctor Management
exports.createDoctor = async (req, res) => {
    try {
        const { name, email, password, specialty, phone, profilePicture } = req.body;

        if (!name || !email || !password || !specialty) {
            return res.status(400).json({ message: 'Name, email, password, and specialty are required' });
        }

        let existingDoctor = await Doctor.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({ message: 'Doctor with this email already exists' });
        }

        const doctor = new Doctor({
            name,
            email,
            password,
            specialty,
            phone: phone || '',
            role: 'doctor',
            profilePicture: profilePicture || null
        });

        await doctor.save();

        res.status(201).json({
            _id: doctor._id,
            name: doctor.name,
            email: doctor.email,
            specialty: doctor.specialty,
            profilePicture: doctor.profilePicture,
            phone: doctor.phone,
            createdAt: doctor.createdAt
        });
    } catch (error) {
        console.error('Create doctor error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.deleteDoctor = async (req, res) => {
    try {
        const doctorId = req.params.doctorId;
        const doctor = await Doctor.findById(doctorId);

        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }

        await Doctor.findByIdAndDelete(doctorId);
        res.json({ message: 'Doctor deleted successfully' });
    } catch (error) {
        console.error('Delete doctor error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Appointment Management
exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find().sort({ date: 1, time: 1 });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.updateAppointmentStatus = async (req, res) => {
    try {
        const appointmentId = req.params.id;
        const { status, notes } = req.body;

        const validStatuses = ['pending', 'confirmed', 'completed', 'cancelled', 'rejected'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ message: 'Invalid status value' });
        }

        const appointment = await Appointment.findById(appointmentId);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        appointment.status = status;
        if (notes) appointment.notes = notes;
        appointment.updatedBy = req.user.id;

        await appointment.save();

        res.json({
            message: 'Appointment status updated successfully',
            appointment
        });
    } catch (error) {
        console.error('Error updating appointment status:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
