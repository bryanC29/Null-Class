// client/src/components/UserProfile.js

import React, { useState, useEffect } from 'react';
import axios from '../services/api'; // Import the axios instance from api.js or your preferred HTTP client

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setError('Failed to fetch user profile. Please try again later.');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>User profile not found.</p>;
  }

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default UserProfile;
