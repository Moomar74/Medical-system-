require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/doctors', require('./routes/doctor'));

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => console.log(`Doctor Service running on port ${PORT}`));
