// server/models/User.js

const mongoose = require('mongoose');

// Define User schema
const UserSchema = new mongoose.Schema({
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
  date: {
    type: Date,
    default: Date.now
  }
});

// Create User model
const User = mongoose.model('User', UserSchema);

module.exports = User;
