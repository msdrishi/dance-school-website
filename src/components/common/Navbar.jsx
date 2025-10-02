import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
        <li><NavLink to="/courses" onClick={toggleMenu}>Courses</NavLink></li>
        <li><NavLink to="/gallery" onClick={toggleMenu}>Gallery</NavLink></li>
        <li><NavLink to="/fees" onClick={toggleMenu}>Fees</NavLink></li>
        <li><NavLink to="/enquiry" onClick={toggleMenu}>Enquiry</NavLink></li>
        <li><NavLink to="/feedback" onClick={toggleMenu}>Feedback</NavLink></li>
        <li><NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;