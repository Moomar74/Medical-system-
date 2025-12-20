// backend/Models/User.js - Add profilePicture field

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    enum: ['user', 'admin', 'doctor'], 
    default: 'user' 
  },
  age: { 
    type: Number 
  },
  phone: { 
    type: String 
  },
  address: { 
    type: String 
  },
  gender: { 
    type: String, 
    enum: ['male', 'female', 'other'] 
  },
  dateOfBirth: { 
    type: Date 
  },
  emergencyContact: { 
    type: String 
  },
  insuranceInfo: { 
    type: String 
  },
  profilePicture: { 
    type: String, 
    default: null 
  }, // ADD THIS FIELD - stores base64 image
  specialty: { 
    type: String 
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('User', userSchema);