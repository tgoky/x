import React, { useState } from 'react';
import '../styles/Dashboard.css'; // Create a CSS file called "Dashboard.css" and include the styles mentioned below
    
const Dashboard = () => {

  const Sidebar = () => {
    return (
      <div className="sidebar">
        <ul className="sidebar-items sidebar-item-text">
          <li className="sidebar-item">
            <span className="sidebar-item-icon ">📚</span>
            Academics
          </li>
          <li className="sidebar-item">
            <span className="sidebar-item-icon">🏫</span>
            Classes
          </li>
          <li className="sidebar-item ">
            <span className="sidebar-item-icon">🌍</span>
            School Tour
          </li>
          <li className="sidebar-item">
            <span className="sidebar-item-icon">🍔</span>
            Recess
          </li>
        </ul>
      </div>
    );
  };






  const [showStudentLogin, setShowStudentLogin] = useState(false);
  const [showStaffLogin, setShowStaffLogin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  

  const handleStudentButtonClick = () => {
    setShowStudentLogin(true);
    setShowStaffLogin(false);
    setShowAdminLogin(false);
  };

  const handleStaffButtonClick = () => {
    setShowStaffLogin(true);
    setShowStudentLogin(false);
    setShowAdminLogin(false);
  };

  const handleAdminButtonClick = () => {
    setShowAdminLogin(true);
    setShowStudentLogin(false);
    setShowStaffLogin(false);
  };

  const handleAdminLogin = () => {
    // Check if the admin username and password are correct
    if (adminUsername === 'admin1' && adminPassword === 'school1') {
      setIsLoggedIn(true);
    }
  };

  const handleAdminUsernameChange = (e) => {
    setAdminUsername(e.target.value);
  };

  const handleAdminPasswordChange = (e) => {
    setAdminPassword(e.target.value);
  };
  if (isLoggedIn) {
    return (
      <div className="dashboard">
        <Sidebar />
        <div className="main-content">
          {/* Add components for the main content area */}
        </div>
      </div>
    );
  }
  return (
    <div className="dashboard">
      <div className="school-portal right-align">SCHOOL PORTAL</div>
      <div className="container">
        <button className="button" onClick={handleStudentButtonClick}>Students</button>
        <button className="button" onClick={handleStaffButtonClick}>Staff</button>
        <button className="button" onClick={handleAdminButtonClick}>Admin</button>
      </div>
      {showStudentLogin && (
        <div className="login-container">
          <input type="text" placeholder="Student ID" className="login-input" />
          <input type="password" placeholder="Student Password" className="login-input" />
          <button className="login-button">Login</button>
        </div>
      )}
      {showStaffLogin && (
        <div className="login-container">
          <input type="text" placeholder="Staff ID" className="login-input" />
          <input type="password" placeholder="Staff Password" className="login-input" />
          <button className="login-button">Login</button>
        </div>
      )}
      {showAdminLogin && (
        <div className="login-container">
          <input
            type="text"
            placeholder="Admin ID"
            className="login-input"
            value={adminUsername}
            onChange={handleAdminUsernameChange}
          />
          <input
            type="password"
            placeholder="Admin Password"
            className="login-input"
            value={adminPassword}
            onChange={handleAdminPasswordChange}
          />
          <button className="login-button" onClick={handleAdminLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
