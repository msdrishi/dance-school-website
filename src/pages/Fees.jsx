import React from 'react';

const Fees = () => {
  const feesStructure = [
    {
      course: "Bharatanatyam",
      beginner: "₹2,500 per month",
      intermediate: "₹3,000 per month",
      advanced: "₹3,500 per month",
      registration: "₹1,000 (one-time)"
    },
    {
      course: "Kathakali",
      beginner: "₹2,800 per month",
      intermediate: "₹3,200 per month",
      advanced: "₹3,800 per month",
      registration: "₹1,200 (one-time)"
    },
    {
      course: "Kuchipudi",
      beginner: "₹2,600 per month",
      intermediate: "₹3,100 per month",
      advanced: "₹3,600 per month",
      registration: "₹1,000 (one-time)"
    }
  ];

  return (
    <div className="fees-page">
      <h1 className="page-title">Fees Structure</h1>
      <p className="section-description">
        Our fee structure is designed to be affordable while providing high-quality dance education.
      </p>
      
      <div className="fees-table-container">
        <table className="fees-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Beginner Level</th>
              <th>Intermediate Level</th>
              <th>Advanced Level</th>
              <th>Registration Fee</th>
            </tr>
          </thead>
          <tbody>
            {feesStructure.map((item, index) => (
              <tr key={index}>
                <td>{item.course}</td>
                <td>{item.beginner}</td>
                <td>{item.intermediate}</td>
                <td>{item.advanced}</td>
                <td>{item.registration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="payment-info">
        <h2>Payment Information</h2>
        <ul>
          <li>Fees must be paid by the 5th of each month</li>
          <li>We accept cash, cheque, and online payments</li>
          <li>Costume charges for performances are additional</li>
          <li>Sibling discounts available (5% for second child)</li>
          <li>Annual membership renewal fee: ₹500</li>
        </ul>
      </div>
      
      <div className="scholarship-info">
        <h2>Scholarships</h2>
        <p>We offer scholarships to talented students based on merit and financial need. Please contact the administration for more details.</p>
      </div>
    </div>
  );
};

export default Fees;