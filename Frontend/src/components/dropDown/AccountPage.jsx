import React from 'react';
import './AccountPage.css';
import {Link}from 'react-router-dom';
const AccountPage = () => {
  return (
    <div className="home-page" >
    <nav className="navbar"> 
    <ul className="navbar-list">
      <li className="navbar-item">
        <Link to="/HomeGo" style={{textDecoration: 'none', color:'black'}}>Home</Link>
      </li>
    </ul>
  </nav>  
    <div className="account-page">
      <div className="account-box">
        <h2 className="account-title">Account Information</h2>
        <div className="account-info">
          <div className="info-row">
            <span className="info-label">Username:</span>
            <span className="info-value">JohnDoe123</span>
          </div>
          <div className="info-row">
            <span className="info-label">Email:</span>
            <span className="info-value">johndoe@example.com</span>
          </div>
          <div className="info-row">
            <span className="info-label">Membership:</span>
            <span className="info-value">Gold</span>
          </div>
        </div>
        <button className="account-button">Edit Account</button>
      </div>
    </div>
    </div>
  );
};

export default AccountPage;
