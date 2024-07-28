// client/src/components/Footer.js

import React from 'react';
import './Footer.css'; // Import CSS file for styling (if needed)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis libero sit amet nunc suscipit, non molestie magna
              vestibulum.
            </p>
          </div>
          <div className="col-md-3">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/internships">Internships</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <ul className="list-unstyled">
              <li>Email: info@example.com</li>
              <li>Phone: +1234567890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
