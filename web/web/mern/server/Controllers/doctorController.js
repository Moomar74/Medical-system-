const Availability = require('../Models/Availability');

exports.setAvailability = async (req, res) => {
  try {
    const { date, startTime, endTime, doctorId } = req.body;

    // Authorization check
    if (req.user.id !== doctorId || req.user.role !== 'doctor') {
      return res.status(403).json({ message: 'Unauthorized: Only doctors can set their own availability' });
    }

    // Validate inputs
    if (!date || !startTime || !endTime) {
      return res.status(400).json({ message: 'Date, start time, and end time are required' });
    }

    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) {
      return res.status(400).json({ message: 'Invalid date format' });
    }

    // Validate time range
    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);
    if (start >= end) {
      return res.status(400).json({ message: 'End time must be after start time' });
    }

    // Check for overlapping availability
    const existingAvailability = await Availability.findOne({
      doctorId,
      date: parsedDate,
      $or: [
        { startTime: { $lte: endTime, $gte: startTime } },
        { endTime: { $lte: endTime, $gte: startTime } },
        { startTime: { $lte: startTime }, endTime: { $gte: endTime } },
      ],
    });

    if (existingAvailability) {
      return res.status(400).json({ message: 'Availability overlaps with an existing slot' });
    }

    const availability = new Availability({
      doctorId,
      date: parsedDate,
      startTime,
      endTime,
    });

    await availability.save();
    res.status(201).json({ message: 'Availability set successfully', availability });
  } catch (error) {
    console.error('Error setting availability:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getAvailability = async (req, res) => {
  try {
    const { doctorId } = req.params;

    // Authorization: Allow users, doctors, and admins to view availability
    if (req.user.role !== 'admin' && req.user.role !== 'user' && req.user.id !== doctorId) {
      return res.status(403).json({ message: 'Unauthorized: Cannot view this doctor’s availability' });
    }

    const availability = await Availability.find({ doctorId })
      .sort({ date: 1, startTime: 1 })
      .select('date startTime endTime');

    res.json(availability);
  } catch (error) {
    console.error('Error fetching availability:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};