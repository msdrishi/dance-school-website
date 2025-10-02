import React from 'react';

const FeedbackCard = ({ feedback }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "star filled" : "star"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="feedback-card">
      <div className="feedback-header">
        <h3 className="feedback-name">{feedback.name}</h3>
        <div className="feedback-rating">
          {renderStars(feedback.rating)}
        </div>
      </div>
      <p className="feedback-comment">{feedback.comment}</p>
      <p className="feedback-date">{feedback.date}</p>
    </div>
  );
};

export default FeedbackCard;