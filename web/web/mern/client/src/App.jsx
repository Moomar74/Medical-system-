import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import { motion, AnimatePresence } from 'framer-motion';

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
    return <>{children}</>;
  };

  const navLinkClasses = "font-montserrat text-gray-600 hover:text-[#FF9999] transition duration-300 transform hover:scale-110";

  return (
    <div>
      {/* Navbar */}
      <motion.nav 
        className="bg-white shadow-md sticky top-0 z-50"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link to="/" className="text-3xl font-bold font-montserrat text-[#FF9999]">
                Dental Clinic
              </Link>
            </motion.div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className={navLinkClasses}>Home</Link>
              <Link to="/about" className={navLinkClasses}>About</Link>
              <Link to="/services" className={navLinkClasses}>Services</Link>
              <Link to="/contact" className={navLinkClasses}>Contact</Link>
              {isLoggedIn ? (
                <>
                  <Link to="/account" className={navLinkClasses}>Account</Link>
                  <motion.button 
                    onClick={handleLogout} 
                    className={navLinkClasses}
                    whileTap={{ scale: 0.9 }}
                  >Logout</motion.button>
                </>
              ) : (
                <>
                  <Link to="/login" className={navLinkClasses}>Login</Link>
                  <Link to="/signup" className={navLinkClasses}>Signup</Link>
                </>
              )}
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to="/booking"
                  className="bg-gradient-to-r from-pink-400 to-red-400 text-white font-montserrat py-2 px-4 rounded-full shadow-md hover:shadow-xl transition-all"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
            {/* Hamburger menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-[#FF9999] focus:outline-none"
                whileTap={{ scale: 0.8 }}
              >
                <i className={isOpen ? 'fas fa-times text-2xl' : 'fas fa-bars text-2xl'}></i>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden bg-white shadow-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="px-4 pt-2 pb-4 space-y-2">
                <Link to="/" className={navLinkClasses + " block"}>Home</Link>
                <Link to="/about" className={navLinkClasses + " block"}>About</Link>
                <Link to="/services" className={navLinkClasses + " block"}>Services</Link>
                <Link to="/contact" className={navLinkClasses + " block"}>Contact</Link>
                {isLoggedIn ? (
                  <>
                    <Link to="/account" className={navLinkClasses + " block"}>Account</Link>
                    <motion.button 
                      onClick={handleLogout} 
                      className={navLinkClasses + " block"}
                      whileTap={{ scale: 0.95 }}
                    >Logout</motion.button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className={navLinkClasses + " block"}>Login</Link>
                    <Link to="/signup" className={navLinkClasses + " block"}>Signup</Link>
                  </>
                )}
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    to="/booking"
                    className="block bg-gradient-to-r from-pink-400 to-red-400 text-white font-montserrat py-2 px-4 rounded-full text-center shadow-md hover:shadow-xl"
                  >
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

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
