// client/src/components/ApplyButton.js

import React, { useState } from 'react';
import axios from '../services/api'; // Import the axios instance from api.js or your preferred HTTP client

const ApplyButton = ({ internshipId, userId }) => {
  const [isApplying, setIsApplying] = useState(false);
  const [applyError, setApplyError] = useState(null);
  const [applySuccess, setApplySuccess] = useState(false);

  const handleApply = async () => {
    try {
      setIsApplying(true);
      const response = await axios.post(`/internships/${internshipId}/apply`, { userId });
      setApplySuccess(true);
      console.log('Application successful:', response.data);
      // Optionally, you can trigger UI changes or navigate to a success page
    } catch (error) {
      console.error('Error applying to internship:', error);
      setApplyError('Failed to apply. Please try again later.');
    } finally {
      setIsApplying(false);
    }
  };

  return (
    <div>
      <button onClick={handleApply} disabled={isApplying}>
        {isApplying ? 'Applying...' : 'Apply Now'}
      </button>
      {applyError && <p>{applyError}</p>}
      {applySuccess && <p>Application successful!</p>}
    </div>
  );
};

export default ApplyButton;
