import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

// Create and export a reusable axios instance with auth headers
export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
};

// Helper to extract user info from token and store in localStorage
export const processToken = (token, responseData = null) => {
  if (!token) return null;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    console.log('Decoded token payload:', payload);
    
    if (payload.user) {
      const { id, role, name, email, specialty } = payload.user;
      
      localStorage.setItem('token', token);
      localStorage.setItem('userId', id);
      localStorage.setItem('role', role);
      
      if (role === 'doctor') {
        if (responseData && responseData.doctorId) {
          localStorage.setItem('doctorId', responseData.doctorId);
          console.log('Stored direct doctorId:', responseData.doctorId);
        } 
        else if (payload.user.isDirectDoctor) {
          localStorage.setItem('doctorId', id);
          console.log('Stored doctorId from direct doctor account:', id);
        }
      }
      
      return { 
        userId: id, 
        role, 
        name, 
        email, 
        specialty,
        doctorId: localStorage.getItem('doctorId') || null 
      };
    }
    return null;
  } catch (err) {
    console.error('Error processing token:', err);
    return null;
  }
};

// Login user
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const { token } = response.data;
    const userData = processToken(token, response.data);
    return { token, user: userData };
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Logout user
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('role');
  localStorage.removeItem('userName');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('doctorId');
};

// Get current user profile
export const getUserProfile = async () => {
  try {
    const response = await axiosWithAuth().get(`${API_URL}/profile`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

// Get profile (alias)
export const getProfile = async () => {
  return getUserProfile();
};

// Update user profile
export const updateProfile = async (profileData) => {
  try {
    const response = await axiosWithAuth().put(`${API_URL}/profile`, profileData);
    console.log('✅ Profile updated successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Error updating profile:', error);
    throw error;
  }
};

// Check if user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp > Date.now() / 1000;
  } catch (error) {
    return false;
  }
};

// Get user role
export const getUserRole = () => {
  return localStorage.getItem('role');
};

// Get user ID
export const getUserId = () => {
  return localStorage.getItem('userId');
};

// Get doctor ID
export const getDoctorId = () => {
  return localStorage.getItem('doctorId');
};