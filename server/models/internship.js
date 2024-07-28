// server/models/Internship.js

const mongoose = require('mongoose');

// Define Internship schema
const InternshipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  stipend: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create Internship model
const Internship = mongoose.model('Internship', InternshipSchema);

module.exports = Internship;
