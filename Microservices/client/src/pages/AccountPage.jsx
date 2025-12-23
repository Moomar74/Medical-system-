import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProfile, updateProfile } from '../services/authService';

const AccountPage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    specialty: '',
    phone: '',
    profilePicture: null
  });
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const data = await getProfile();
        setProfile(data);
        setFormData({
          name: data.name || '',
          email: data.email || '',
          specialty: data.specialty || '',
          phone: data.phone || '',
          profilePicture: data.profilePicture || null
        });
        if (data.profilePicture) {
          setPreviewUrl(data.profilePicture);
        }
      } catch (err) {
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
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
      };
      reader.readAsDataURL(file);
      setError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const updatedProfile = await updateProfile(formData);
      setProfile(updatedProfile);
      setSuccess('Profile updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">My Account</h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
            {success}
          </div>
        )}

        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex justify-center mb-8">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-white text-4xl font-bold">
                {profile?.name?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Profile Picture
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {profile?.role === 'doctor' && (
              <>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Specialty</label>
                  <input
                    type="text"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
            >
              {loading ? 'Updating...' : 'Update Profile'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;