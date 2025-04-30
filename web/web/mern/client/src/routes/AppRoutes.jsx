
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import AppointmentsPage from '../pages/AppointmentsPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/appointments" element={<AppointmentsPage />} />
  </Routes>
);

export default AppRoutes;