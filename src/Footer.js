import React from 'react';
import './Footer.css'; // Create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="column">
        <h2>GrubStake</h2>
        <p>Email</p>
        <p>Address Line</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div className="column">
        <h3>Services</h3>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
          <li>Service 4</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
