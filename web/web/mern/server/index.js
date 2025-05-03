require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug environment variables
console.log('MONGODB_URI:', process.env.MONGODB_URI ? process.env.MONGODB_URI : 'Not set');
console.log('JWT_SECRET:', process.env.JWT_SECRET ? process.env.JWT_SECRET : 'Not set');

if (!process.env.MONGODB_URI) {
  console.error('Error: MONGODB_URI is not defined in .env file. Exiting...');
  process.exit(1);
}

if (!process.env.MONGODB_URI.includes('mongodb+srv')) {
  console.error('Error: MONGODB_URI must be a MongoDB Atlas connection string (mongodb+srv://...). Exiting...');
  process.exit(1);
}

// Disconnect any existing connections
mongoose.disconnect().then(() => {
  console.log('Disconnected from any existing MongoDB connections');
}).catch(err => {
  console.error('Error disconnecting existing connections:', err);
});

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB Atlas');
  // Debug: List databases to confirm connection
  mongoose.connection.db.admin().listDatabases((err, result) => {
    if (err) {
      console.error('Error listing databases:', err);
    } else {
      console.log('Available databases:', result.databases.map(db => db.name));
    }
  });
}).catch((err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

// Routes
let authRouter;
try {
  authRouter = require('./Routers/authRouter'); // Try Routers first
  console.log('Loaded authRouter from ./Routers/authRouter');
} catch (e) {
  try {
    authRouter = require('./Routes/authRouter'); // Fallback to Routes
    console.log('Loaded authRouter from ./Routes/authRouter');
  } catch (e) {
    console.error('Error: Cannot find authRouter in ./Routers/ or ./Routes/. Exiting...', e);
    process.exit(1);
  }
}
app.use('/api/auth', authRouter);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});