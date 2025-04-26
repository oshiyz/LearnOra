import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>LearnOra</h1>
          </Link>
        </div>
        
        <nav className="nav-links">
          <Link to="/courses">Courses</Link>
          <Link to="/community">Community</Link>
          <Link to="/learning-plans">Learning Plans</Link>
          <Link to="/resources">Resources</Link>
        </nav>

        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 