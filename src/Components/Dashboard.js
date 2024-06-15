import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/Login_App');
  };

  if (!currentUser) {
    navigate('/Login_App');
    return null;
  }

  return (
    <div className="form-container">
      <h2>Dashboard</h2>
      <p>Welcome ArunRawoor's App, {currentUser.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
