import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div className="user-profile">
          <div className="user-avatar">
            {user.firstName?.[0]}{user.lastName?.[0]}
          </div>
          <div className="user-info">
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.email}</p>
          </div>
        </div>
        
        <nav className="dashboard-nav">
          <a href="#overview" className="nav-item active">
            <i className="fas fa-home"></i>
            Overview
          </a>
          <a href="#my-courses" className="nav-item">
            <i className="fas fa-book"></i>
            My Courses
          </a>
          <a href="#progress" className="nav-item">
            <i className="fas fa-chart-line"></i>
            Progress
          </a>
          <a href="#certificates" className="nav-item">
            <i className="fas fa-certificate"></i>
            Certificates
          </a>
          <a href="#settings" className="nav-item">
            <i className="fas fa-cog"></i>
            Settings
          </a>
        </nav>

        <button onClick={handleLogout} className="logout-button">
          <i className="fas fa-sign-out-alt"></i>
          Logout
        </button>
      </div>

      <div className="dashboard-main">
        <div className="dashboard-header">
          <h2>Welcome back, {user.firstName}!</h2>
          <div className="date">{new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</div>
        </div>

        <div className="dashboard-content">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Courses in Progress</h3>
              <p className="stat-number">3</p>
            </div>
            <div className="stat-card">
              <h3>Completed Courses</h3>
              <p className="stat-number">5</p>
            </div>
            <div className="stat-card">
              <h3>Certificates Earned</h3>
              <p className="stat-number">2</p>
            </div>
            <div className="stat-card">
              <h3>Learning Hours</h3>
              <p className="stat-number">24</p>
            </div>
          </div>

          <div className="recent-activity">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon completed">
                  <i className="fas fa-check"></i>
                </div>
                <div className="activity-details">
                  <h4>Completed Python Basics</h4>
                  <p>You completed the final quiz with 95% score</p>
                  <span className="activity-time">2 hours ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon progress">
                  <i className="fas fa-play"></i>
                </div>
                <div className="activity-details">
                  <h4>Started Web Development</h4>
                  <p>You began the HTML & CSS module</p>
                  <span className="activity-time">Yesterday</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon achievement">
                  <i className="fas fa-trophy"></i>
                </div>
                <div className="activity-details">
                  <h4>New Achievement</h4>
                  <p>You earned the "Quick Learner" badge</p>
                  <span className="activity-time">2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 