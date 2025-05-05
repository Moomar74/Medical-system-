import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DoctorAppointment.css';

const DoctorAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [doctorId, setDoctorId] = useState('66377b12c14b3d267643598b'); // Set the doctor's ID
    const [availability, setAvailability] = useState([]);
    const [newAvailability, setNewAvailability] = useState({ date: '', time: '' });
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetchAppointments();
        fetchAvailability();
        fetchDoctors();
    }, []);

    const fetchAppointments = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/appointments?doctorId=${doctorId}`);
            setAppointments(response.data);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    const fetchAvailability = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/availability?doctorId=${doctorId}`);
            setAvailability(response.data);
        } catch (error) {
            console.error('Error fetching availability:', error);
        }
    };

    const fetchDoctors = async () => {
        try {
            const response = await axios.get('http://localhost:5000/doctors');
            setDoctors(response.data);
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };

    const handleAddAvailability = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/availability', {
                doctorId: doctorId,
                date: newAvailability.date,
                time: newAvailability.time,
            });
            setNewAvailability({ date: '', time: '' });
            fetchAvailability();
        } catch (error) {
            console.error('Error adding availability:', error);
        }
    };

    const handleDeleteAvailability = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/availability/${id}`);
            fetchAvailability();
        } catch (error) {
            console.error('Error deleting availability:', error);
        }
    };

    const handleBookAppointment = async (doctorId, date, time) => {
        try {
            const patientId = '66377b12c14b3d267643598c'; // Replace with actual patient ID غيرها يا محمود
            const appointmentData = {
                doctorId: doctorId,
                patientId: patientId,
                date: date,
                time: time,
                status: 'booked',
            };
            await axios.post('http://localhost:5000/appointments', appointmentData);
            fetchAppointments(); // Refresh the list of appointments
            alert('Appointment booked successfully!');
        } catch (error) {
            console.error('Error booking appointment:', error);
            alert('Failed to book appointment.');
        }
    };

    return (
        <div className="doctor-appointment-container">
            <h1>Doctor Appointments</h1>

            <div className="doctor-view">
                <h2>Manage Availability</h2>
                <form onSubmit={handleAddAvailability} className="availability-form">
                    <input
                        type="date"
                        value={newAvailability.date}
                        onChange={(e) => setNewAvailability({ ...newAvailability, date: e.target.value })}
                        required
                    />
                    <input
                        type="time"
                        value={newAvailability.time}
                        onChange={(e) => setNewAvailability({ ...newAvailability, time: e.target.value })}
                        required
                    />
                    <button type="submit">Add Availability</button>
                </form>

                <h3>Available Slots</h3>
                <ul className="availability-list">
                    {availability.map((slot) => (
                        <li key={slot._id} className="availability-item">
                            {new Date(slot.date).toLocaleDateString()} {slot.time}
                            <button onClick={() => handleDeleteAvailability(slot._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

            {appointments.length > 0 && (
                <div className="appointment-section">
                    <h2>Appointments</h2>
                    <ul className="appointment-list">
                        {appointments.map((appointment) => (
                            <li key={appointment._id} className="appointment-item">
                                Patient : {appointment.patientId.name} - Date: {new Date(appointment.date).toLocaleDateString()} Time: {appointment.time} - Status: {appointment.status}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DoctorAppointments;