import axios from 'axios';
import { getToken } from '../utils/storage';

const ADMIN_API_URL = 'http://localhost:5001/api/admin';

const getHeaders = () => ({
    headers: { Authorization: `Bearer ${getToken()}` }
});

export const getAllAppointments = async () => {
    try {
        const response = await axios.get(`${ADMIN_API_URL}/appointments`, getHeaders());
        return response.data;
    } catch (error) {
        console.error('Error fetching all appointments:', error);
        throw error.response?.data || { message: 'Failed to load all appointments' };
    }
};

export const updateAppointmentStatus = async (appointmentId, statusData) => {
    try {
        const response = await axios.patch(`${ADMIN_API_URL}/appointments/${appointmentId}/status`, statusData, getHeaders());
        return response.data;
    } catch (error) {
        console.error('Error updating appointment status:', error);
        throw error.response?.data || { message: 'Failed to update appointment status' };
    }
};

export const createDoctor = async (doctorData) => {
    try {
        const response = await axios.post(`${ADMIN_API_URL}/doctors`, doctorData, getHeaders());
        return response.data;
    } catch (error) {
        console.error('Error creating doctor:', error);
        throw error.response?.data || { message: 'Failed to create doctor' };
    }
};

export const deleteDoctor = async (doctorId) => {
    try {
        const response = await axios.delete(`${ADMIN_API_URL}/doctors/${doctorId}`, getHeaders());
        return response.data;
    } catch (error) {
        console.error('Error deleting doctor:', error);
        throw error.response?.data || { message: 'Failed to delete doctor' };
    }
};
