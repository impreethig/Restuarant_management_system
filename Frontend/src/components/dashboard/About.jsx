import React from 'react';
import {Link } from 'react-router-dom';
// import './About.css';
import './HomePage.css';
function AboutPage() {
  return (
    <div className="home-page" >
      <nav className="navbar"> 
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/HomeGo" style={{textDecoration: 'none', color:'black'}}>Home</Link>
        </li>
      </ul>
    </nav>  
      <h1>About</h1>
      <img className="image-about" src='about1.jpg' alt='abt1' style={{justifyContent:'center'}}></img><br></br>
      <p>Welcome to our restaurant management system! We are dedicated to providing an efficient and seamless experience for both restaurant staff and customers.</p><br></br>
      <p>Our system allows restaurant owners to manage reservations, track orders, manage menus, and analyze sales data. Customers can easily make reservations, browse menus, and provide feedback.</p><br></br>
      <p>We strive to enhance the dining experience and streamline operations to ensure customer satisfaction and business success.</p>
      
    </div>
    
  );
}

export default AboutPage;
