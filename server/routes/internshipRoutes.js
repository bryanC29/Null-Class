// server/routes/internshipRoutes.js

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Internship = require('../models/Internship');

// @route   POST /api/internships
// @desc    Create a new internship
// @access  Private (requires authentication)
router.post(
  '/',
  [
    auth, // Middleware to authenticate user (using JWT)
    [
      check('title', 'Title is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
      check('location', 'Location is required').not().isEmpty(),
      check('duration', 'Duration is required').not().isEmpty(),
      check('stipend', 'Stipend is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, location, duration, stipend } = req.body;

    try {
      // Create new internship instance
      const newInternship = new Internship({
        title,
        description,
        location,
        duration,
        stipend,
      });

      // Save internship to database
      await newInternship.save();

      res.json(newInternship);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   GET /api/internships
// @desc    Get all internships
// @access  Public
router.get('/', async (req, res) => {
  try {
    const internships = await Internship.find();
    res.json(internships);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/internships/:id
// @desc    Get an internship by ID
// @access  Public
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const internship = await Internship.findById(id);

    if (!internship) {
      return res.status(404).json({ msg: 'Internship not found' });
    }

    res.json(internship);
  } catch (err) {
    console.error(err.message);

    // Check if the error is a valid ObjectId error (usually caused by an invalid ID format)
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Internship not found' });
    }

    res.status(500).send('Server Error');
  }
});

// @route   PUT /api/internships/:id
// @desc    Update an internship by ID
// @access  Private (requires authentication)
router.put(
  '/:id',
  [
    auth, // Middleware to authenticate user (using JWT)
    [
      check('title', 'Title is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
      check('location', 'Location is required').not().isEmpty(),
      check('duration', 'Duration is required').not().isEmpty(),
      check('stipend', 'Stipend is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, location, duration, stipend } = req.body;
    const { id } = req.params;

    try {
      let internship = await Internship.findById(id);

      if (!internship) {
        return res.status(404).json({ msg: 'Internship not found' });
      }

      // Update fields
      internship.title = title;
      internship.description = description;
      internship.location = location;
      internship.duration = duration;
      internship.stipend = stipend;

      // Save updated internship to database
      await internship.save();

      res.json(internship);
    } catch (err) {
      console.error(err.message);

      // Check if the error is a valid ObjectId error (usually caused by an invalid ID format)
      if (err.name === 'CastError' && err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Internship not found' });
      }

      res.status(500).send('Server Error');
    }
  }
);

// @route   DELETE /api/internships/:id
// @desc    Delete an internship by ID
// @access  Private (requires authentication)
router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;

  try {
    const internship = await Internship.findById(id);

    if (!internship) {
      return res.status(404).json({ msg: 'Internship not found' });
    }

    // Remove internship from database
    await internship.remove();

    res.json({ msg: 'Internship removed' });
  } catch (err) {
    console.error(err.message);

    // Check if the error is a valid ObjectId error (usually caused by an invalid ID format)
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Internship not found' });
    }

    res.status(500).send('Server Error');
  }
});

module.exports = router;
