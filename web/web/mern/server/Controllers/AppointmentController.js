const Appointment = require('../Models/Appointment');
const User = require('../Models/User');

exports.getAppointments = async (req, res) => {
  try {
    const userId = req.user.id;
    const appointments = await Appointment.find({ patientId: userId });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getDoctorAppointments = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;
    const appointments = await Appointment.find({ doctorId });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getDoctors = async (req, res) => {
  try {
    const doctors = await User.find({ role: 'doctor' }).select('name specialty');
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.createAppointment = async (req, res) => {
  try {
    const { title, date, time, description, doctorId } = req.body;
    const patientId = req.user.id;

    if (req.user.role !== 'user' && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized: Only users and admins can create appointments' });
    }

    const patient = await User.findById(patientId);
    const doctor = await User.findById(doctorId);

    if (!patient || !doctor) {
      return res.status(404).json({ message: 'Patient or doctor not found' });
    }

    if (doctor.role !== 'doctor') {
      return res.status(400).json({ message: 'Selected user is not a doctor' });
    }

    const appointment = new Appointment({
      title,
      date: new Date(date),
      time,
      description,
      patientId,
      patientName: patient.name,
      doctorId,
      doctorName: doctor.name
    });

    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const appointmentId = req.params.id;
    const appointment = await Appointment.findById(appointmentId);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    if (req.user.role !== 'admin' && req.user.id !== appointment.patientId.toString()) {
      return res.status(403).json({ message: 'Unauthorized: Only the patient or admin can delete this appointment' });
    }

    await Appointment.findByIdAndDelete(appointmentId);
    res.json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};