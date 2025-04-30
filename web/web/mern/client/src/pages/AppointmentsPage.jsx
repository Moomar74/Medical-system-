// client/src/pages/AppointmentsPage.jsx
import React, { useState, useEffect } from 'react';
import { getAppointments, createAppointment } from '../services/appointmentService';
import AppointmentCard from '../components/AppointmentCard';

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch appointments on mount
  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      try {
        const data = await getAppointments();
        setAppointments(data);
      } catch (err) {
        setError('Failed to load appointments');
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const newAppointment = await createAppointment(formData);
      setAppointments([...appointments, newAppointment]);
      setFormData({ title: '', date: '', time: '', description: '' }); // Reset form
    } catch (err) {
      setError('Failed to book appointment');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Book Your Dental Appointment</h1>

      {/* Create Appointment Form */}
      <form onSubmit={handleSubmit} className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Schedule an Appointment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Appointment Type</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Cleaning, Checkup"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Additional Notes</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Any specific requests?"
              className="w-full p-2 border rounded"
              rows="3"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Book Appointment
        </button>
      </form>

      {/* Error Message */}
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

      {/* Appointments List */}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : appointments.length === 0 ? (
        <p className="text-center">No appointments booked yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {appointments.map((appointment) => (
            <AppointmentCard key={appointment._id} appointment={appointment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentsPage;