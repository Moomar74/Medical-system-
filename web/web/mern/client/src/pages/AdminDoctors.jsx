import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getDoctors } from '../services/appointmentService';
import { createDoctor, deleteDoctor } from '../services/adminService';

const AdminDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialty: '',
    profilePicture: null
  });
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      try {
        const data = await getDoctors();
        setDoctors(data);
        setError(null);
      } catch (err) {
        setError('Failed to load doctors.');
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file.');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB.');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setFormData({ ...formData, profilePicture: base64String });
        setPreviewUrl(base64String);
        console.log('✅ Image converted to base64, size:', (base64String.length / 1024).toFixed(2), 'KB');
      };
      reader.onerror = () => {
        setError('Failed to read image file.');
      };
      reader.readAsDataURL(file);
      setError(null);
    }
  };

  const removeProfilePicture = () => {
    setFormData({ ...formData, profilePicture: null });
    setPreviewUrl(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const submitData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        specialty: formData.specialty,
        role: 'doctor',
        profilePicture: formData.profilePicture
      };

      console.log('📤 Sending doctor data');

      const newDoctor = await createDoctor(submitData);
      setDoctors([...doctors, newDoctor]);
      setFormData({ name: '', email: '', password: '', specialty: '', profilePicture: null });
      setPreviewUrl(null);
      setSuccess('Doctor added successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Error adding doctor:', err);
      setError(err.message || 'Failed to add doctor.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (doctorId) => {
    setLoading(true);
    setError(null);
    try {
      await deleteDoctor(doctorId);
      setDoctors(doctors.filter((doctor) => doctor._id !== doctorId));
      setSuccess('Doctor deleted successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to delete doctor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.section
        className="bg-gradient-to-r from-[#FF9999] to-white py-24 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold font-montserrat text-gray-800 tracking-tight"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Manage Doctors
        </motion.h1>
        <motion.p
          className="mt-6 text-xl md:text-2xl font-open-sans text-gray-600 max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Add and manage doctor accounts for the clinic.
        </motion.p>
      </motion.section>

      <section className="py-24 max-w-6xl mx-auto px-4">
        {error && (
          <motion.div
            className="bg-red-100 text-red-700 p-4 rounded-lg mb-8 mx-auto max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {error}
          </motion.div>
        )}
        {success && (
          <motion.div
            className="bg-green-100 text-green-700 p-4 rounded-lg mb-8 mx-auto max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {success}
          </motion.div>
        )}

        <motion.div
          className="mb-12 bg-white shadow-xl rounded-lg p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-montserrat text-gray-800 mb-6">Add New Doctor</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block font-montserrat text-gray-600 font-semibold mb-2">
                Profile Picture
              </label>
              <div className="flex items-center space-x-4">
                {previewUrl ? (
                  <div className="relative">
                    <img
                      src={previewUrl}
                      alt="Profile preview"
                      className="w-24 h-24 rounded-full object-cover border-2 border-[#FF9999]"
                    />
                    <button
                      type="button"
                      onClick={removeProfilePicture}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-400">
                    <span className="text-gray-400 text-xs">No image</span>
                  </div>
                )}
                <div className="flex-1">
                  <input
                    type="file"
                    id="profilePicture"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="profilePicture"
                    className="inline-block bg-gray-200 text-gray-700 font-montserrat font-semibold py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-300 transition"
                  >
                    Choose Image
                  </label>
                  <p className="text-sm text-gray-500 mt-2">JPG, PNG or GIF (max 5MB)</p>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block font-montserrat text-gray-600 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Doctor's full name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9999]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-montserrat text-gray-600 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="doctor@example.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9999]"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block font-montserrat text-gray-600 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9999]"
                required
              />
            </div>

            <div>
              <label htmlFor="specialty" className="block font-montserrat text-gray-600 font-semibold mb-2">
                Specialty
              </label>
              <input
                type="text"
                id="specialty"
                name="specialty"
                value={formData.specialty}
                onChange={handleInputChange}
                placeholder="e.g., Orthodontics"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9999]"
                required
              />
            </div>

            <div className="md:col-span-2">
              <motion.button
                type="submit"
                className="bg-[#FF9999] text-white font-montserrat font-bold py-2 px-6 rounded-full hover:bg-pink-600 transition"
                whileHover={{ scale: 1.05 }}
                disabled={loading}
              >
                {loading ? 'Adding...' : 'Add Doctor'}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : doctors.length === 0 ? (
          <p className="text-center text-gray-600">No doctors added yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <motion.div
                key={doctor._id}
                className="bg-white shadow-lg rounded-lg p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex justify-center mb-4">
                  {doctor.profilePicture ? (
                    <img
                      src={doctor.profilePicture}
                      alt={`${doctor.name}'s profile`}
                      className="w-20 h-20 rounded-full object-cover border-2 border-[#FF9999]"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-[#FF9999] flex items-center justify-center border-2 border-[#FF9999]">
                      <span className="text-white text-2xl font-bold">
                        {doctor.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{doctor.name}</h3>
                <p className="text-gray-600 mb-1 text-center">
                  <strong>Email:</strong> {doctor.email}
                </p>
                <p className="text-gray-600 mb-4 text-center">
                  <strong>Specialty:</strong> {doctor.specialty}
                </p>
                <div className="flex justify-center">
                  <motion.button
                    onClick={() => handleDelete(doctor._id)}
                    className="bg-[#FF9999] text-white font-semibold py-1 px-3 rounded-full hover:bg-pink-600 transition"
                    whileHover={{ scale: 1.05 }}
                  >
                    Delete
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <footer className="bg-[#333333] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dental Clinic</h3>
            <p>Transforming smiles with care and precision.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#FF9999]">About</Link></li>
              <li><Link to="/services" className="hover:text-[#FF9999]">Services</Link></li>
              <li><Link to="/contact" className="hover:text-[#FF9999]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-[#FF9999]">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-2xl hover:text-[#FF9999]">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-2xl hover:text-[#FF9999]">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>© 2025 Dental Clinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AdminDoctors;