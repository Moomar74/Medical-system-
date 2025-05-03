import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Account = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No authentication token found.');
        setTimeout(() => navigate('/login'), 3000);
        return;
      }
      const response = await axios.get('http://localhost:5000/api/auth/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
      setName(response.data.name);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load profile.');
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        setTimeout(() => navigate('/login'), 3000);
      }
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No authentication token found.');
        navigate('/login');
        return;
      }
      const response = await axios.put(
        'http://localhost:5000/api/auth/profile',
        { name },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUser(response.data);
      setEditMode(false);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update profile.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero-like Header */}
      <section className="bg-pink-100 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-800 animate-scaleIn">
          Welcome, {user?.name || 'User'}!
        </h1>
        <p className="text-lg md:text-xl font-open-sans text-gray-600 mt-4">
          Manage your account details and stay connected with us.
        </p>
      </section>
      {/* Profile Section */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6 animate-scaleIn">
            {error}
            {error.includes('token') && (
              <button
                onClick={() => {
                  setError('');
                  fetchProfile();
                }}
                className="ml-4 bg-pink-500 text-white py-1 px-3 rounded hover:bg-pink-600"
              >
                Retry
              </button>
            )}
          </div>
        )}
        {user ? (
          <div className="bg-white shadow-lg rounded-lg p-8 animate-scaleIn">
            <h2 className="text-2xl font-semibold font-montserrat text-gray-800 mb-6">
              Your Profile
            </h2>
            {!editMode ? (
              <div className="space-y-4">
                <div>
                  <label className="font-montserrat text-gray-600">Name:</label>
                  <p className="font-open-sans text-gray-800">{user.name}</p>
                </div>
                <div>
                  <label className="font-montserrat text-gray-600">Email:</label>
                  <p className="font-open-sans text-gray-800">{user.email}</p>
                </div>
                <div>
                  <label className="font-montserrat text-gray-600">Role:</label>
                  <p className="font-open-sans text-gray-800 capitalize">{user.role}</p>
                </div>
                <div className="flex space-x-4 mt-6">
                  <button
                    onClick={() => setEditMode(true)}
                    className="bg-pink-500 text-white font-montserrat py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="bg-gray-500 text-white font-montserrat py-2 px-6 rounded-full hover:bg-gray-600 transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label htmlFor="name" className="font-montserrat text-gray-600">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded-lg font-open-sans focus:ring-2 focus:ring-pink-300"
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-pink-500 text-white font-montserrat py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditMode(false)}
                    className="bg-gray-500 text-white font-montserrat py-2 px-6 rounded-full hover:bg-gray-600 transition duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <p className="text-center text-gray-600 font-open-sans">Loading profile...</p>
        )}
      </section>
      {/* Footer (same as Home.jsx) */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4">Dental Clinic</h3>
            <p className="font-open-sans">Transforming smiles with care and precision.</p>
          </div>
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-open-sans">
              <li><a href="/about" className="hover:text-pink-400 transition">About</a></li>
              <li><a href="/services" className="hover:text-pink-400 transition">Services</a></li>
              <li><a href="/contact" className="hover:text-pink-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-pink-400 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-2xl hover:text-pink-400 transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-2xl hover:text-pink-400 transition">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center font-open-sans text-gray-400">
          <p>© 2025 Dental Clinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Account;