import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Rhymth and Grace School</h3>
          <p>Preserving the essence of Indian classical dance</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/enquiry">Enquiry</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>123 Dance Street, Artistic Avenue</p>
          <p>Mumbai, Maharashtra, India</p>
          <p>Phone: +91 98765 43210</p>
          <p>Email: info@natyaacademy.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rhymth and Grace School. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;