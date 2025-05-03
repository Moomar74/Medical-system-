import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/styles.css';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', response.data.token);

      if (onLogin) onLogin(); // ✅ Notify parent of successful login

      const userRole = response.data.user.role;
      navigate(userRole === 'admin' ? '/admin-dashboard' : '/user-dashboard', { replace: true });
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 to-white z-0"></div>
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full relative z-10 animate-scaleIn">
        <h2 className="text-4xl font-bold text-gray-800 font-montserrat mb-6 text-center">
          Welcome Back
        </h2>
        <p className="text-gray-600 font-open-sans mb-8 text-center">
          Log in to your account
        </p>
        {error && (
          <p className="text-red-500 text-center mb-4 p-3 bg-red-100 rounded-lg border border-red-300">
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block text-gray-700 font-montserrat font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 ${
                validationErrors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email"
              aria-describedby={validationErrors.email ? 'email-error' : undefined}
            />
            {validationErrors.email && (
              <p id="email-error" className="text-red-500 text-sm mt-1">
                {validationErrors.email}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-montserrat font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 ${
                validationErrors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your password"
              aria-describedby={validationErrors.password ? 'password-error' : undefined}
            />
            {validationErrors.password && (
              <p id="password-error" className="text-red-500 text-sm mt-1">
                {validationErrors.password}
              </p>
            )}
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="mr-2 h-4 w-4 text-pink-400 focus:ring-pink-300 border-gray-300 rounded"
            />
            <label htmlFor="rememberMe" className="text-gray-700 font-open-sans">
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-400 text-white font-montserrat font-semibold text-lg py-3 rounded-full hover:bg-pink-500 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
            aria-label="Log in to your account"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging In...
              </span>
            ) : (
              <>Log In</>
            )}
          </button>
        </form>
        <p className="text-gray-600 font-open-sans mt-6 text-center">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="text-pink-400 font-semibold hover:text-pink-500"
            aria-label="Navigate to signup page"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
