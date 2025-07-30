import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
const ContactPage = () => {
  return (
    <div className='home-page' >
        <nav className="navbar"> 
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/HomeGo" style={{textDecoration: 'none', color:'black'}}>Home</Link>
        </li>
      </ul>
    </nav>
      <h1>Contact Us</h1>
      <p>For any inquiries, please feel free to contact us:</p>
        <p1>Email: info@example.com</p1>
        <p1>Phone: 123-456-7890</p1>
        <p1>Address: 123 Main Street, City, Country</p1>
    </div>
  );
};

export default ContactPage;
