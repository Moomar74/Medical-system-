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
import Contact from './pages/Contact';
import DoctorAppointments from './pages/DoctorAppointment';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const [userRole, setUserRole] = useState(localStorage.getItem('role')); // You'll likely want to initialize this from localStorage
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
        setUserRole(localStorage.getItem('role')); // Initialize userRole on mount
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setIsLoggedIn(false);
        setUserRole(null);
        navigate('/login');
    };

    const ProtectedRoute = ({ children }) => {
        const token = localStorage.getItem('token');
        if (!token) {
            return <Navigate to="/login" />;
        }
        return <>{children}</>;
    };

    const checkUserRole = (allowedRoles) => {
        return allowedRoles.includes(userRole);
    };

    const navLinkClasses = "font-montserrat text-gray-600 hover:text-[#FF9999] transition duration-300 transform hover:scale-110";

    return (
        <div>
            {/* Navi */}
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
                            whileHover={{ scale: 1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Link
                                to="/"
                                className="text-3xl font-bold font-montserrat text-[#FF9999] transition-all duration-300 hover:text-4xl"
                            >
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
                                    <motion.div whileHover={{ scale: 1.1 }}>
                                        {checkUserRole(['admin']) && (
                                            <Link
                                                to="/DoctorAppointment"
                                                className="bg-gradient-to-r from-pink-400 to-red-400 text-white font-montserrat py-2 px-4 rounded-full shadow-md hover:shadow-xl transition-all"
                                            >
                                                Personal Appointments {/* Changed text for clarity */}
                                            </Link>
                                        )}
                                        {checkUserRole(['user']) && (
                                            <Link
                                                to="/booking"
                                                className="bg-gradient-to-r from-pink-400 to-red-400 text-white font-montserrat py-2 px-4 rounded-full shadow-md hover:shadow-xl transition-all"
                                            >
                                                book now
                                            </Link>
                                        )}
                                    </motion.div>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className={navLinkClasses}>Login</Link>
                                    <Link to="/signup" className={navLinkClasses}>Signup</Link>
                                </>
                            )}
                        </div>
                        {/* Hambu mop */}
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

                {/* Mob */}
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
                                        <motion.div whileHover={{ scale: 1.05 }}>
                                            {checkUserRole(['admin']) && (
                                                <Link
                                                    to="/DoctorAppointment"
                                                    className="block bg-gradient-to-r from-pink-400 to-red-400 text-white font-montserrat py-2 px-4 rounded-full text-center shadow-md hover:shadow-xl"
                                                >
                                                    Personal Appointments 
                                                </Link>
                                            )}
                                            {checkUserRole(['user']) && (
                                                <Link
                                                    to="/booking"
                                                    className="block bg-gradient-to-r from-pink-400 to-red-400 text-white font-montserrat py-2 px-4 rounded-full text-center shadow-md hover:shadow-xl"
                                                >
                                                    book now
                                                </Link>
                                            )}
                                        </motion.div>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login" className={navLinkClasses + " block"}>Login</Link>
                                        <Link to="/signup" className={navLinkClasses + " block"}>Signup</Link>
                                    </>
                                )}
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
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />} />
                <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />} />
                <Route path="/DoctorAppointment" element={<ProtectedRoute><DoctorAppointments /></ProtectedRoute>} />
                {/*<Route path="/reserve" element={}/>*/}
                <Route
                    path="/account"
                    element={
                        <ProtectedRoute>
                            <Account />
                        </ProtectedRoute>
                    }
                />
                <Route path="/locations" element={<div>Locations</div>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<ProtectedRoute><div>Booking</div></ProtectedRoute>} />
                <Route path="/user-dashboard" element={<ProtectedRoute><div>User Dashboard</div></ProtectedRoute>} />
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