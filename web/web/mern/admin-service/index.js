const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Higher limit for profile pictures
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ Admin Service connected to MongoDB');
    } catch (err) {
        console.error('❌ Admin Service MongoDB connection error:', err);
        process.exit(1);
    }
};

connectDB();

// Routes
const adminRouter = require('./Routers/adminRouter');
app.use('/api/admin', adminRouter);

// Health check
app.get('/health', (req, res) => {
    res.json({ service: 'admin-service', status: 'up' });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error', error: err.message });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`🚀 Admin Microservice running on port ${PORT}`);
});
