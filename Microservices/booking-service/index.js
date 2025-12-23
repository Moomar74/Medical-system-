require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/appointment', require('./routes/appointment'));

// Health check
app.get('/health', (req, res) => {
    res.json({ service: 'booking-service', status: 'up' });
});

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => console.log(`Booking Service running on port ${PORT}`));
