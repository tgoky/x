import React, { useState } from 'react';
import '../styles/Dashboard.css'; // Create a CSS file called "Dashboard.css" and include the styles mentioned below
    
const Dashboard = () => {
  const [showStudentLogin, setShowStudentLogin] = useState(false);
  const [showStaffLogin, setShowStaffLogin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

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

  return (
    <div className="dashboard">
      <div className="school-portal">SCHOOL PORTAL</div>
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
          <input type="text" placeholder="Admin ID" className="login-input" />
          <input type="password" placeholder="Admin Password" className="login-input" />
          <button className="login-button">Login</button>
        </div>
      )}
    </div>
  );
}
    
export default Dashboard;
