import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, About, Login, Services, Signup } from './pages';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

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

            {!isLoggedIn && (
              <>
                <Link to="/signup" className="nav-link" onClick={toggleMenu}>Signup</Link>
                <Link to="/login" className="nav-link" onClick={toggleMenu}>Login</Link>
              </>
            )}

            {isLoggedIn && (
              <Link to="/user-dashboard" className="nav-link" onClick={toggleMenu}>My Account</Link>
            )}

            <Link to="/Booking" className="nav-book-button" onClick={toggleMenu}>Book Now</Link>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
            <Route path="/Booking" element={<div>Booking Page</div>} />
            <Route path="/services" element={<Services />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/locations" element={<div>Locations Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
