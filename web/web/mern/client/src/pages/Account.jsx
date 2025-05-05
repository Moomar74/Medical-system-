import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const Account = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Placeholder data for registration, history, and reminders
  const [registrationDate, setRegistrationDate] = useState('2025-05-04');
  const [history, setHistory] = useState([
    { id: 1, date: '2025-04-15', service: 'Teeth Cleaning', doctor: 'Dr. Mina Cs', status: 'Completed' },
    { id: 2, date: '2025-06-10', service: 'Whitening', doctor: 'Dr. Mina Cs2', status: 'Upcoming' },
  ]);
  const [reminders, setReminders] = useState([
    { id: 1, date: '2025-06-10', message: 'Upcoming Whitening Appointment with Dr. Mina CS' },
  ]);

  const fetchProfile = async () => {
    setLoading(true);
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
      // TODO: Fetch from backend
      // setRegistrationDate(response.data.createdAt);
      // setHistory(response.data.appointments || []);
      // setReminders(response.data.reminders || []);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load profile.');
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        setTimeout(() => navigate('/login'), 3000);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No authentication token found.');
        navigate('/login');
        return;
      }
      // TODO: Replace with actual API endpoint
      await axios.put(
        'http://localhost:5000/api/auth/password',
        { password },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setPassword('');
      setConfirmPassword('');
      setError('');
      setEditMode(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update password.');
    } finally {
      setLoading(false);
    }
  };

  // Format registration date
  const formattedDate = new Date(registrationDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-[#FF9999] to-white py-24 text-center overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' opacity='0.1'%3E%3Ccircle cx='100' cy='100' r='80' fill='%23FFFFFF'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold font-montserrat text-gray-800 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your Dental Dashboard
        </motion.h1>
        <motion.p
          className="mt-6 text-xl md:text-2xl font-open-sans text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Manage your profile, appointments, and stay connected with your dental care team.
        </motion.p>
      </motion.section>

      {/* Dashboard Section */}
      <section className="py-24 max-w-6xl mx-auto px-4">
        {error && (
          <motion.div
            className="bg-red-100 text-red-700 p-4 rounded-lg mb-8 mx-auto max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {error}
            {error.includes('token') && (
              <button
                onClick={() => {
                  setError('');
                  fetchProfile();
                }}
                className="ml-4 bg-[#FF9999] text-white py-1 px-3 rounded-full hover:bg-pink-600 transition duration-300"
                aria-label="Retry loading profile"
              >
                Retry
              </button>
            )}
          </motion.div>
        )}
        {loading ? (
          <motion.p
            className="text-center text-gray-600 font-open-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Loading your dashboard...
          </motion.p>
        ) : user ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Profile Card */}
            <motion.div
              className="bg-white shadow-xl rounded-lg p-8 border-2 border-transparent bg-gradient-to-r from-[#FF9999]/10 to-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#FF9999] rounded-full flex items-center justify-center text-white font-montserrat font-bold text-2xl">
                  {user.name.charAt(0)}
                </div>
                <h2 className="text-3xl font-bold font-montserrat text-gray-800">Profile</h2>
              </div>
              {!editMode ? (
                <div className="space-y-4">
                  <div>
                    <label className="font-montserrat text-gray-600 font-semibold">Name:</label>
                    <p className="font-open-sans text-gray-800">{user.name}</p>
                  </div>
                  <div>
                    <label className="font-montserrat text-gray-600 font-semibold">Email:</label>
                    <p className="font-open-sans text-gray-800">{user.email}</p>
                  </div>
                  <div>
                    <label className="font-montserrat text-gray-600 font-semibold">Role:</label>
                    <p className="font-open-sans text-gray-800 capitalize">{user.role}</p>
                  </div>
                  <div className="flex space-x-4 mt-6">
                    <motion.button
                      onClick={() => setEditMode('profile')}
                      className="bg-[#FF9999] text-white font-montserrat font-bold py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300"
                      whileHover={{ scale: 1.05 }}
                      aria-label="Edit profile"
                    >
                      Edit Profile
                    </motion.button>
                    <motion.button
                      onClick={() => setEditMode('password')}
                      className="bg-blue-500 text-white font-montserrat font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
                      whileHover={{ scale: 1.05 }}
                      aria-label="Change password"
                    >
                      Change Password
                    </motion.button>
                    <motion.button
                      onClick={handleLogout}
                      className="bg-gray-500 text-white font-montserrat font-bold py-2 px-6 rounded-full hover:bg-gray-600 transition duration-300"
                      whileHover={{ scale: 1.05 }}
                      aria-label="Logout"
                    >
                      Logout
                    </motion.button>
                  </div>
                </div>
              ) : editMode === 'profile' ? (
                <form onSubmit={handleUpdateProfile} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="font-montserrat text-gray-600 font-semibold">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg font-open-sans focus:outline-none focus:ring-2 focus:ring-[#FF9999]"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <motion.button
                      type="submit"
                      className="bg-[#FF9999] text-white font-montserrat font-bold py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300"
                      whileHover={{ scale: 1.05 }}
                      disabled={loading}
                      aria-label="Save profile changes"
                    >
                      {loading ? 'Saving...' : 'Save'}
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={() => setEditMode(false)}
                      className="bg-gray-500 text-white font-montserrat font-bold py-2 px-6 rounded-full hover:bg-gray-600 transition duration-300"
                      whileHover={{ scale: 1.05 }}
                      aria-label="Cancel profile editing"
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleUpdatePassword} className="space-y-4">
                  <div>
                    <label htmlFor="password" className="font-montserrat text-gray-600 font-semibold">
                      New Password:
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg font-open-sans focus:outline-none focus:ring-2 focus:ring-[#FF9999]"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="font-montserrat text-gray-600 font-semibold">
                      Confirm Password:
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg font-open-sans focus:outline-none focus:ring-2 focus:ring-[#FF9999]"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <motion.button
                      type="submit"
                      className="bg-[#FF9999] text-white font-montserrat font-bold py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300"
                      whileHover={{ scale: 1.05 }}
                      disabled={loading}
                      aria-label="Save new password"
                    >
                      {loading ? 'Saving...' : 'Save'}
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={() => setEditMode(false)}
                      className="bg-gray-500 text-white font-montserrat font-bold py-2 px-6 rounded-full hover:bg-gray-600 transition duration-300"
                      whileHover={{ scale: 1.05 }}
                      aria-label="Cancel password change"
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Membership Card */}
            <motion.div
              className="bg-white shadow-xl rounded-lg p-8 border-2 border-transparent bg-gradient-to-r from-[#FF9999]/10 to-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-3xl font-bold font-montserrat text-gray-800 mb-6">Membership</h2>
              <div className="space-y-4">
                <div>
                  <label className="font-montserrat text-gray-600 font-semibold">Member Since:</label>
                  <p className="font-open-sans text-gray-800">{formattedDate}</p>
                </div>
                <div>
                  <label className="font-montserrat text-gray-600 font-semibold">Membership Status:</label>
                  <p className="font-open-sans text-gray-800">Active</p>
                </div>
                <div className="mt-6">
                  <motion.a
                    href="/booking"
                    className="inline-block bg-[#FF9999] text-white font-montserrat font-bold py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    aria-label="Book a new appointment"
                  >
                    Show Personal Appointments
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Reminders Card */}
            <motion.div
              className="bg-white shadow-xl rounded-lg p-8 border-2 border-transparent bg-gradient-to-r from-[#FF9999]/10 to-white/10 md:col-span-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-3xl font-bold font-montserrat text-gray-800 mb-6">Upcoming Reminders</h2>
              {reminders.length > 0 ? (
                <ul className="space-y-4">
                  {reminders.map((reminder) => (
                    <motion.li
                      key={reminder.id}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-10 h-10 bg-[#FF9999] rounded-full flex items-center justify-center text-white font-bold">
                        <i className="fas fa-bell"></i>
                      </div>
                      <div>
                        <p className="font-open-sans text-gray-800">
                          {reminder.message} on{' '}
                          {new Date(reminder.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="font-open-sans text-gray-600">No upcoming reminders.</p>
              )}
            </motion.div>
          </div>
        ) : (
          <motion.p
            className="text-center text-gray-600 font-open-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Unable to load profile.
          </motion.p>
        )}
      </section>

      {/* Appointment History Section */}
      <section className="py-24 max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold font-montserrat text-gray-800 mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Appointment History
        </motion.h2>
        {loading ? (
          <motion.p
            className="text-center text-gray-600 font-open-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Loading history...
          </motion.p>
        ) : history.length > 0 ? (
          <motion.div
            className="bg-white shadow-xl rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-x-auto">
              <table className="min-w-full font-open-sans">
                <thead className="bg-[#FF9999] text-white">
                  <tr>
                    <th className="py-3 px-6 text-left font-montserrat font-semibold">Date</th>
                    <th className="py-3 px-6 text-left font-montserrat font-semibold">Service</th>
                    <th className="py-3 px-6 text-left font-montserrat font-semibold">Doctor</th>
                    <th className="py-3 px-6 text-left font-montserrat font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((appointment, index) => (
                    <motion.tr
                      key={appointment.id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <td className="py-4 px-6 text-gray-800">
                        {new Date(appointment.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </td>
                      <td className="py-4 px-6 text-gray-800">{appointment.service}</td>
                      <td className="py-4 px-6 text-gray-800">{appointment.doctor}</td>
                      <td className="py-4 px-6">
                        <span
                          className={`inline-block py-1 px-3 rounded-full text-sm font-semibold ${
                            appointment.status === 'Completed'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        ) : (
          <motion.p
            className="text-center text-gray-600 font-open-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No appointment history available.
          </motion.p>
        )}
      </section>

      {/* Footer */}
      <motion.footer
        className="bg-[#333333] text-white py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4">Dental Clinic</h3>
            <p className="font-open-sans">Transforming smiles with care and precision.</p>
          </div>
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-open-sans">
              <li><a href="/about" className="hover:text-[#FF9999] transition">About</a></li>
              <li><a href="/services" className="hover:text-[#FF9999] transition">Services</a></li>
              <li><a href="/contact" className="hover:text-[#FF9999] transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-[#FF9999] transition" aria-label="Follow us on Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-2xl hover:text-[#FF9999] transition" aria-label="Follow us on Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-2xl hover:text-[#FF9999] transition" aria-label="Follow us on Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center font-open-sans text-gray-400">
          <p>© 2025 Dental Clinic. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Account;