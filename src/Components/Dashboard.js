import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  if (!currentUser) {
    navigate('/login');
    return null;
  }

  return (
    <div className="form-container">
      <h2>Dashboard</h2>
      <p>Welcome, {currentUser.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
