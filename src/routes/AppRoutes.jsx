import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Courses from '../pages/Courses';
import Enquiry from '../pages/Enquiry';
import Feedback from '../pages/Feedback';
import Gallery from '../pages/Gallery';
import Fees from '../pages/Fees';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const AppRoutes = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/fees" element={<Fees />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default AppRoutes;