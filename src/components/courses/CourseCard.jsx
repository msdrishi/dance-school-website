import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={course.image} alt={course.name} />
      </div>
      <div className="course-content">
        <h3 className="course-title">{course.name}</h3>
        <p className="course-description">{course.description}</p>
        <div className="course-details">
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Fees:</strong> {course.fees}</p>
        </div>
        <Link to="/enquiry" className="btn btn-primary course-btn">Enquire Now</Link>
      </div>
    </div>
  );
};

export default CourseCard;