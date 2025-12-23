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

// 1. Admin Service (Port 5001)
app.use('/api/admin', createProxyMiddleware({
    target: 'http://localhost:5001',
    changeOrigin: true,
    onError: (err, req, res) => {
        res.status(500).json({ message: 'Admin Service is down' });
    }
}));

// 2. Auth Service (Port 5002)
app.use('/api/auth', createProxyMiddleware({
    target: 'http://localhost:5002',
    changeOrigin: true,
    onError: (err, req, res) => {
        res.status(500).json({ message: 'Auth Service is down' });
    }
}));

// 2. Booking/Appointment Service (Port 5003)
app.use('/api/appointment', createProxyMiddleware({
    target: 'http://localhost:5003',
    changeOrigin: true,
    onError: (err, req, res) => {
        res.status(500).json({ message: 'Booking Service is down' });
    }
}));

// 3. Patient Service & Dental History (Port 5004)
// Grouping dental history under patient service logic
app.use('/api/patient', createProxyMiddleware({
    target: 'http://localhost:5004',
    changeOrigin: true,
    onError: (err, req, res) => {
        res.status(500).json({ message: 'Patient Service is down' });
    }
}));

app.use('/api/dental-history', createProxyMiddleware({
    target: 'http://localhost:5004',
    changeOrigin: true,
    onError: (err, req, res) => {
        res.status(500).json({ message: 'Patient Service (Dental History) is down' });
    }
}));

// 4. Doctor Service (Port 5005)
app.use('/api/doctor', createProxyMiddleware({
    target: 'http://localhost:5005',
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
