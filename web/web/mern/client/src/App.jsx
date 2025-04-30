import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, About, Services, Login, Signup } from './pages';
import './assets/css/styles.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar bg-white shadow-md py-4 px-6 sticky top-0 z-50">
          <div className="navbar-brand">
            <Link to="/" className="text-2xl font-montserrat font-bold text-pink-400 hover:text-pink-500 transition-colors">
              Dental Clinic
            </Link>
          </div>
          <div className="navbar-links flex items-center gap-4">
            <Link to="/" className="nav-link font-montserrat font-semibold text-gray-600 hover:text-pink-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="nav-link font-montserrat font-semibold text-gray-600 hover:text-pink-400 transition-colors">
              About
            </Link>
            <Link to="/services" className="nav-link font-montserrat font-semibold text-gray-600 hover:text-pink-400 transition-colors">
              Services
            </Link>
            <Link to="/locations" className="nav-link font-montserrat font-semibold text-gray-600 hover:text-pink-400 transition-colors">
              Locations
            </Link>
            <Link to="/contact" className="nav-link font-montserrat font-semibold text-gray-600 hover:text-pink-400 transition-colors">
              Contact
            </Link>
            <Link to="/booking" className="nav-link font-montserrat font-semibold text-gray-600 hover:text-pink-400 transition-colors">
              Book
            </Link>
            <Link to="/signup" className="nav-link font-montserrat font-semibold text-gray-600 hover:text-pink-400 transition-colors">
              Signup
            </Link>
            <Link to="/login" className="nav-link font-montserrat font-semibold text-gray-600 hover:text-pink-400 transition-colors">
              Login
            </Link>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" className="nav-link" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/booking" element={<div className="p-6 text-center text-2xl font-montserrat">Booking Page</div>} />
            <Route path="/services" element={<Services />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/locations" element={<div className="p-6 text-center text-2xl font-montserrat">Locations Page</div>} />
            <Route path="/contact" element={<div className="p-6 text-center text-2xl font-montserrat">Contact Page</div>} />
            <Route path="/admin-dashboard" element={<div className="p-6 text-center text-2xl font-montserrat">Admin Dashboard</div>} />
            <Route path="/user-dashboard" element={<div className="p-6 text-center text-2xl font-montserrat">User Dashboard</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;