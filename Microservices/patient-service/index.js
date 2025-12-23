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
app.use('/api/patient', require('./routes/patient'));

const PORT = process.env.PORT || 5004;

app.listen(PORT, () => console.log(`Patient Service running on port ${PORT}`));
