const Availability = require('../Models/Availability');

exports.setAvailability = async (req, res) => {
  try {
    const { date, startTime, endTime, doctorId } = req.body;
    if (req.user.id !== doctorId || req.user.role !== 'doctor') {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    const availability = new Availability({
      doctorId,
      date: new Date(date),
      startTime,
      endTime
    });
    await availability.save();
    res.status(201).json({ message: 'Availability set successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};