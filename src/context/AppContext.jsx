import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'Bharatanatyam',
      description: 'Classical dance form from Tamil Nadu',
      duration: '2 years',
      fees: '₹2500 per month',
      image: '/images/bharatanatyam.jpg'
    },
    {
      id: 2,
      name: 'Kathakali',
      description: 'Classical dance form from Kerala',
      duration: '2.5 years',
      fees: '₹2800 per month',
      image: '/images/kathakali.jpg'
    },
    {
      id: 3,
      name: 'Kuchipudi',
      description: 'Classical dance form from Andhra Pradesh',
      duration: '2 years',
      fees: '₹2600 per month',
      image: '/images/kuchipudi.jpg'
    }
  ]);

  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      name: "Priya Singh",
      comment: "The Bharatanatyam classes are excellent. The instructor is very patient and knowledgeable.",
      rating: 5,
      date: "2023-05-15"
    },
    {
      id: 2,
      name: "Rahul Sharma",
      comment: "My daughter loves the Kathakali classes. It's helped her build confidence.",
      rating: 4,
      date: "2023-06-02"
    },
    {
      id: 3,
      name: "Anita Desai",
      comment: "The facilities are great and the teaching methodology is very effective.",
      rating: 5,
      date: "2023-06-10"
    }
  ]);

  const addFeedback = (newFeedback) => {
    setFeedbacks([
      ...feedbacks,
      { id: feedbacks.length + 1, ...newFeedback, date: new Date().toISOString().split('T')[0] }
    ]);
  };

  return (
    <AppContext.Provider value={{ courses, feedbacks, addFeedback }}>
      {children}
    </AppContext.Provider>
  );
};