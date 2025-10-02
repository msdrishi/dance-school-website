import React from 'react';
import CoursesList from '../components/courses/CoursesList';

const Courses = () => {
  return (
    <div className="courses-page">
      <h1 className="page-title">Our Dance Courses</h1>
      <p className="section-description">
        Explore our diverse range of authentic Indian classical dance courses designed for all ages and skill levels.
      </p>
      <CoursesList />
    </div>
  );
};

export default Courses;