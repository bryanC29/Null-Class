// client/src/components/Internships.js

import React, { useState, useEffect } from 'react';
import axios from '../services/api'; // Import the axios instance from api.js or your preferred HTTP client
import InternshipCard from '../components/internshipCard';

const Internships = () => {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get('/internships');
        setInternships(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching internships:', error);
        setError('Failed to fetch internships. Please try again later.');
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="internships">
      <h2>Internships</h2>
      <div className="internship-list">
        {internships.map(internship => (
          <InternshipCard key={internship._id} internship={internship} />
        ))}
      </div>
    </div>
  );
};

export default Internships;
