import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="page-title">Contact Us</h1>
      <div className="contact-container">
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Our Location</h2>
          <p><strong>Address:</strong> 123 Dance Street, Artistic Avenue, Mumbai</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> info@natyaacademy.com</p>
          <p><strong>Hours:</strong> Monday to Saturday - 9:00 AM to 7:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;