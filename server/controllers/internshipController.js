// server/controllers/internshipController.js

const Internship = require('../models/Internship'); // Assuming Internship model is defined

// Create a new internship
exports.createInternship = async (req, res) => {
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
};

// Get all internships
exports.getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find();
    res.json(internships);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get a single internship by ID
exports.getInternshipById = async (req, res) => {
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
};

// Update an internship by ID
exports.updateInternship = async (req, res) => {
  const { id } = req.params;
  const { title, description, location, duration, stipend } = req.body;

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
};

// Delete an internship by ID
exports.deleteInternship = async (req, res) => {
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
};
