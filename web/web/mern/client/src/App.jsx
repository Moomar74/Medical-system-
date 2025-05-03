import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return <Navigate to="/login" />;
    }
    // Small delay to allow state to settle
    return <>{children}</>;
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-montserrat font-bold text-pink-500">
                Dental Clinic
              </a>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="/" className="font-montserrat text-gray-600 hover:text-pink-500">Home</a>
              <a href="/about" className="font-montserrat text-gray-600 hover:text-pink-500">About</a>
              <a href="/services" className="font-montserrat text-gray-600 hover:text-pink-500">Services</a>
              <a href="/contact" className="font-montserrat text-gray-600 hover:text-pink-500">Contact</a>
              {isLoggedIn ? (
                <>
                  <a href="/account" className="font-montserrat text-gray-600 hover:text-pink-500">Account</a>
                  <button
                    onClick={handleLogout}
                    className="font-montserrat text-gray-600 hover:text-pink-500"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <a href="/login" className="font-montserrat text-gray-600 hover:text-pink-500">Login</a>
                  <a href="/signup" className="font-montserrat text-gray-600 hover:text-pink-500">Signup</a>
                </>
              )}
              <a
                href="/booking"
                className="bg-pink-500 text-white font-montserrat py-2 px-4 rounded-full hover:bg-pink-600"
              >
                Book Now
              </a>
            </div>
            {/* Hamburger menu for mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-pink-500 focus:outline-none"
              >
                <i className={isOpen ? 'fas fa-times text-2xl' : 'fas fa-bars text-2xl'}></i>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="/" className="block font-montserrat text-gray-600 hover:text-pink-500">Home</a>
              <a href="/about" className="block font-montserrat text-gray-600 hover:text-pink-500">About</a>
              <a href="/services" className="block font-montserrat text-gray-600 hover:text-pink-500">Services</a>
              <a href="/contact" className="block font-montserrat text-gray-600 hover:text-pink-500">Contact</a>
              {isLoggedIn ? (
                <>
                  <a href="/account" className="block font-montserrat text-gray-600 hover:text-pink-500">Account</a>
                  <button
                    onClick={handleLogout}
                    className="block font-montserrat text-gray-600 hover:text-pink-500"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <a href="/login" className="block font-montserrat text-gray-600 hover:text-pink-500">Login</a>
                  <a href="/signup" className="block font-montserrat text-gray-600 hover:text-pink-500">Signup</a>
                </>
              )}
              <a
                href="/booking"
                className="block bg-pink-500 text-white font-montserrat py-2 px-4 rounded-full hover:bg-pink-600 text-center"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route path="/locations" element={<div>Locations</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/booking" element={<div>Booking</div>} />
        <Route path="/user-dashboard" element={<div>User Dashboard</div>} />
        <Route path="/admin-dashboard" element={<div>Admin Dashboard</div>} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}