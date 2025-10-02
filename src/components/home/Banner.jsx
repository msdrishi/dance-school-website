import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Discover the Art of Indian Classical Dance</h1>
        <p>Learn authentic Bharatanatyam, Kathakali, and other classical dance forms from experienced gurus</p>
        <div className="banner-buttons">
          <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
          <Link to="/enquiry" className="btn btn-secondary">Make an Enquiry</Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;