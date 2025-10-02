import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Expert Dance Gurus",
      description: "Learn from certified and experienced dance teachers who have mastered their art form."
    },
    {
      title: "Authentic Training",
      description: "Experience traditional teaching methods combined with modern techniques for effective learning."
    },
    {
      title: "Regular Performances",
      description: "Showcase your talent through regular stage performances and cultural events."
    },
    {
      title: "Customized Learning",
      description: "Classes tailored for different age groups and proficiency levels."
    }
  ];

  return (
    <section className="features-section section">
      <div className="container">
        <h2 className="section-title">Why Choose Rhymth and Grace School?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;