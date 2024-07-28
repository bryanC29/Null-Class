// client/src/components/InternshipCard.js

import React from 'react';
// import './InternshipCard.css'; // Import CSS file for styling (if needed)

const InternshipCard = ({ internship }) => {
  return (
    <div className="card internship-card">
      <img src={internship.image} className="card-img-top" alt={internship.title} />
      <div className="card-body">
        <h5 className="card-title">{internship.title}</h5>
        <p className="card-text">{internship.description}</p>
        <p className="card-text"><strong>Location:</strong> {internship.location}</p>
        <p className="card-text"><strong>Duration:</strong> {internship.duration} months</p>
        <p className="card-text"><strong>Stipend:</strong> {internship.stipend}</p>
        <a href={`/internships/${internship._id}`} className="btn btn-primary">View Details</a>
      </div>
    </div>
  );
};

export default InternshipCard;
