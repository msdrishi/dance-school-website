import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import FeedbackForm from '../components/feedback/FeedbackForm';
import FeedbackCard from '../components/feedback/FeedbackCard';

const Feedback = () => {
  const { feedbacks } = useContext(AppContext);

  return (
    <div className="feedback-page">
      <h1 className="page-title">Feedback</h1>
      <p className="section-description">
        We value your feedback! Please share your thoughts about our dance school.
      </p>
      <FeedbackForm />
      <h2 className="section-title">Previous Feedback</h2>
      <div className="feedback-list">
        {feedbacks.map(feedback => (
          <FeedbackCard key={feedback.id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;