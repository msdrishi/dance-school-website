import React from 'react';
import EnquiryForm from '../components/enquiry/EnquiryForm';

const Enquiry = () => {
  return (
    <div className="enquiry-page">
      <h1 className="page-title">Make an Enquiry</h1>
      <p className="section-description">
        Interested in joining our dance classes? Fill out the form below and we'll get back to you with all the information you need.
      </p>
      <EnquiryForm />
    </div>
  );
};

export default Enquiry;