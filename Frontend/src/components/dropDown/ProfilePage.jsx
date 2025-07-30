import React from 'react';
import './ProfilePage.css';
import { Link } from 'react-router-dom';
const ProfilePage = () => {
  return (
    <div className="home-page" >
    <nav className="navbar"> 
    <ul className="navbar-list">
      <li className="navbar-item">
        <Link to="/HomeGo" style={{textDecoration: 'none', color:'black'}}>Home</Link>
      </li>
    </ul>
  </nav>  
    <div className="profile-page">
      <div className="profile-box">
        <h2 className="profile-name">John Doe</h2>
        <img src="profilePage.avif" alt="Profile" className="profile-image" />
        <div className="profile-details">
          <p className="profile-email">Email: john.doe@example.com</p>
          <p className="profile-location">Location: New York City</p>
          <p className="profile-bio">Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ProfilePage;
