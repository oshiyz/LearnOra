import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const [activeTab, setActiveTab] = useState('view');
  const [formData, setFormData] = useState({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    phone: user.phone || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // TODO: Implement API call to update profile
    console.log('Updating profile:', formData);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // TODO: Implement API call to change password
    console.log('Changing password:', formData);
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h2>Account Settings</h2>
        <div className="settings-tabs">
          <button 
            className={`tab-button ${activeTab === 'view' ? 'active' : ''}`}
            onClick={() => setActiveTab('view')}
          >
            Account Details
          </button>
          <button 
            className={`tab-button ${activeTab === 'edit' ? 'active' : ''}`}
            onClick={() => setActiveTab('edit')}
          >
            Edit Profile
          </button>
          <button 
            className={`tab-button ${activeTab === 'password' ? 'active' : ''}`}
            onClick={() => setActiveTab('password')}
          >
            Change Password
          </button>
        </div>
      </div>

      <div className="settings-content">
        {activeTab === 'view' && (
          <div className="account-details">
            <div className="account-avatar">
              {user.firstName?.[0]}{user.lastName?.[0]}
            </div>
            <div className="account-info">
              <div className="info-group">
                <label>Full Name</label>
                <p>{user.firstName} {user.lastName}</p>
              </div>
              <div className="info-group">
                <label>Email</label>
                <p>{user.email}</p>
              </div>
              <div className="info-group">
                <label>Phone</label>
                <p>{user.phone || 'Not provided'}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'edit' && (
          <form onSubmit={handleProfileUpdate} className="settings-form">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="save-button">Save Changes</button>
          </form>
        )}

        {activeTab === 'password' && (
          <form onSubmit={handlePasswordChange} className="settings-form">
            <div className="form-group">
              <label>Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="save-button">Change Password</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Settings; 