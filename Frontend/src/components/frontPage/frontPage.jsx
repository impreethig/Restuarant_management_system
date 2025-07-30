import React from 'react';
import './frontpage.css';
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <div className="front-page">
      <h1>S^3 RESTAURANT</h1>
      <div className="button-container">
        <nav>
          <Link to="/LoginPage">
          <button className="login-button">
          STAFF  </button>
          </Link> 
          </nav>
          <nav>
            <Link to="/RegisterForm">
        <button className="login-button">CUSTOMER</button>
        </Link>
        </nav>
      </div>
    </div>
  );
};

export default FrontPage;