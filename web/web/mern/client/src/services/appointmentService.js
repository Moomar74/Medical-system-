import axios from 'axios';

const API_URL = 'http://localhost:5000/api/appointment';
const AUTH_URL = 'http://localhost:5000/api/auth';
const DOCTOR_URL = 'http://localhost:5000/api/doctor';

export const getAppointments = async () => {
  try {
    const response = await axios.get(`${API_URL}/appointments`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching appointments:', error);
    throw error;
  }
};

export const getDoctorAppointments = async (doctorId) => {
  try {
    const response = await axios.get(`${API_URL}/doctor-appointments/${doctorId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching doctor appointments:', error);
    throw error;
  }
};

export const getAllAppointments = async () => {
  try {
    const response = await axios.get(`${API_URL}/all-appointments`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching all appointments:', error);
    throw error;
  }
};

export const createAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(`${API_URL}/create`, appointmentData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating appointment:', error);
    throw error;
  }
};

export const deleteAppointment = async (appointmentId) => {
  try {
    const response = await axios.delete(`${API_URL}/${appointmentId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting appointment:', error);
    throw error;
  }
};

export const createDoctor = async (doctorData) => {
  try {
    const response = await axios.post(`${AUTH_URL}/doctor`, doctorData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating doctor:', error);
    throw error;
  }
};

export const deleteDoctor = async (doctorId) => {
  try {
    const response = await axios.delete(`${AUTH_URL}/doctor/${doctorId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting doctor:', error);
    throw error;
  }
};

export const getDoctors = async () => {
  try {
    const response = await axios.get(`${API_URL}/doctors`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};