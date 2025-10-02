import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Meera Patel",
      role: "Parent",
      text: "My daughter has been learning Bharatanatyam for two years now. The transformation in her confidence and discipline is remarkable."
    },
    {
      name: "Karan Mehta",
      role: "Student",
      text: "The teachers are highly skilled and patient. I've learned so much about Kathakali in just a few months."
    },
    {
      name: "Sanjana Roy",
      role: "Professional Dancer",
      text: "As someone who wanted to perfect my skills, Rhymth and Grace School provided the right environment to grow as an artist."
    }
  ];

  return (
    <section className="testimonials-section section">
      <div className="container">
        <h2 className="section-title">What Our Students Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;