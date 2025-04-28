import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, About, Login, Services, Signup } from './pages';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/">Dental Clinic</Link>
          </div>
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation menu">
            <span className="hamburger-icon">&#9776;</span>
          </button>
          <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
            <Link to="/services" className="nav-link" onClick={toggleMenu}>Services</Link>
            <Link to="/locations" className="nav-link" onClick={toggleMenu}>Locations</Link>
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
            <Link to="/Booking" className="nav-link" onClick={toggleMenu}>Book</Link>
            <Link to="/signup" className="nav-link" onClick={toggleMenu}>Signup</Link>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Booking" element={<div>Booking Page</div>} />
            <Route path="/services" element={<Services />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/locations" element={<div>Locations Page </div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;