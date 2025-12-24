const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend access
app.use(cors());

// Request logging
app.use((req, res, next) => {
    console.log(`[Gateway] ${req.method} ${req.url} -> Target Port Determination...`);
    next();
});

// -------------------------------------------------------------------
// ROUTING RULES
// The Gateway forwards requests to the appropriate microservice
// -------------------------------------------------------------------

// 1. Admin Service
app.use('/api/admin', createProxyMiddleware({
    target: process.env.ADMIN_SERVICE_URL || 'http://localhost:5001',
    changeOrigin: true,
    onError: (err, req, res) => {
        res.status(500).json({ message: 'Admin Service is down' });
    }
}));

// 2. Auth Service
app.use('/api/auth', createProxyMiddleware({
    target: process.env.AUTH_SERVICE_URL || 'http://localhost:5002',
    changeOrigin: true,
    onError: (err, req, res) => {
        res.status(500).json({ message: 'Auth Service is down' });
    }
}));

// 3. Booking/Appointment Service
app.use('/api/appointment', createProxyMiddleware({
    target: process.env.BOOKING_SERVICE_URL || 'http://localhost:5003',
    changeOrigin: true,
    onError: (err, req, res) => {
        res.status(500).json({ message: 'Booking Service is down' });
    }
}));

// 4. Patient Service & Dental History
app.use('/api/patient', createProxyMiddleware({
    target: process.env.PATIENT_SERVICE_URL || 'http://localhost:5004',
    changeOrigin: true,
    onError: (err, req, res) => {
        res.status(500).json({ message: 'Patient Service is down' });
    }
}));

app.use('/api/dental-history', createProxyMiddleware({
    target: process.env.PATIENT_SERVICE_URL || 'http://localhost:5004',
    changeOrigin: true,
    onError: (err, req, res) => {
        res.status(500).json({ message: 'Patient Service (Dental History) is down' });
    }
}));

// 5. Doctor Service
app.use('/api/doctor', createProxyMiddleware({
    target: process.env.DOCTOR_SERVICE_URL || 'http://localhost:5005',
    changeOrigin: true,
    onError: (err, req, res) => {
        res.status(500).json({ message: 'Doctor Service is down' });
    }
}));

// Root check
app.get('/', (req, res) => {
    res.send('API Gateway is running');
});

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
    console.log(`- Admin Service:     http://localhost:5001/api/admin`);
    console.log(`- Auth Service:      http://localhost:5002/api/auth`);
    console.log(`- Booking Service:   http://localhost:5003/api/appointment`);
    console.log(`- Patient Service:   http://localhost:5004/api/patient`);
    console.log(`- Dental Service:    http://localhost:5004/api/dental-history`);
    console.log(`- Doctor Service:    http://localhost:5005/api/doctor`);
});
