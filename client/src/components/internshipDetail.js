// client/src/components/InternshipDetail.js

import React, { useEffect, useState } from 'react';
import axios from '../services/api'; // Import the axios instance from api.js or your preferred HTTP client

const InternshipDetail = ({ match }) => {
  const [internship, setInternship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInternship = async () => {
      try {
        const response = await axios.get(`/internships/${match.params.id}`);
        setInternship(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching internship details:', error);
        setError('Failed to fetch internship details. Please try again later.');
        setLoading(false);
      }
    };

    fetchInternship();
  }, [match.params.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!internship) {
    return <p>Internship not found.</p>;
  }

  return (
    <div>
      <h2>{internship.title}</h2>
      <p><strong>Location:</strong> {internship.location}</p>
      <p><strong>Duration:</strong> {internship.duration} months</p>
      <p><strong>Stipend:</strong> {internship.stipend}</p>
      <p><strong>Description:</strong></p>
      <p>{internship.description}</p>
      <p><strong>Skills Required:</strong> {internship.skillsRequired.join(', ')}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default InternshipDetail;
