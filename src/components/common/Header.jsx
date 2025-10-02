import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>Rhymth and Grace School</h1>
        </Link>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;