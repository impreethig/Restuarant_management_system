import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';

// import 'table.jpg';
const HomePage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  return (
    // <div sx={{display:'flex'}}>
    <div className="home-page" sx={{display:'flex'}}>
      <nav className="navbar" sx={{display:"flex"}}>
        <ul className="navbar-list">
        <nav>
        <Link to="/log" style={{textDecoration: 'none'}}>
         <li className="navbar-item">Login</li>
        </Link>
        </nav>
        <nav>
        <Link to="/Sign"style={{textDecoration: 'none'}}>
         <li className="navbar-item">SignUp</li>
        </Link>
        </nav>
       

        {/* <li className="navbar-item">SignUp</li> */}
        {/* <nav>
          <Link to="/ToHome" style={{textDecoration: 'none'}}>
          <li className="navbar-item">Home</li>
          </Link>
        </nav> */}
        <nav>
          <Link to="/ToAbout" style={{textDecoration: 'none'}}>
          <li className="navbar-item">About</li>
          </Link>
        </nav>
        <nav>
          <Link to="/ToContact" style={{textDecoration: 'none'}}>
          <li className="navbar-item">Contact</li>
          </Link>
        </nav>
          {/* <li className="navbar-item">About</li> */}
          {/* <li className="navbar-item">Contact</li> */}
        <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">Search</button>
      </div>
      <li className="navbar-item dropDown" onClick={toggleDropdown} >
      <img src='profile.png' className='profile' alt='profile'></img>
            
            {isDropdownOpen && (
              <ul className="dropdown-content" >
                <nav>
                <Link to="/profile" style={{textDecoration:'none', color: 'white', listStyle:'none'}}>
                <li>Profile</li>
                </Link>
                </nav><br></br>

                <nav>
                <Link to="/account" style={{textDecoration:'none', color: 'white', listStyle:'none'}}>
                <li>Account</li>
                </Link>
                </nav><br></br>

                <nav>
                <Link to="/logout" style={{textDecoration:'none', color: 'white', listStyle:'none'}}>
                <li>Logout</li>
                </Link>
                </nav>
              
              </ul>
            )}
       </li>
      {/* <nav>
          <Link to="/ToProfile" style={{textDecoration: 'none'}}>
          <li className="navbar-item">
            <img src='profile.png' className='profile' alt='profile'></img>

          </li>
          </Link>
        </nav> */}

        </ul>
      </nav>
    
      <h1>S^3 Restaurant</h1>
      <div className="featured">
        {/* <img className="image" alter='tab'></img> */}
        <div className='img-card'>
            <img src='table.jpg' height='300px' width='380px' alt='tab'/>
            <h2>Table Reservation</h2>
            <nav>
            <Link to="/table">
            <button className='click-button'>Click</button>
            </Link>
            </nav>    
        </div>
            
        
        <div className='img-card'>
            <img src='menu.webp' height='300px' width='380px' alt='tab'/>
            <h2>Food Order</h2>
            <nav>
              <Link to='/order'>
                <button className='click-button'>Click</button>
              </Link>
            </nav>

        </div>
    
        <div className='img-card'>
            <img src='party.avif' height='300px' width='380px' alt='tab'/>
            <h2>Hall Booking</h2>
            <nav>
            <Link to='/hall'>
            <button className='click-button'>Click</button>
            </Link>
            </nav>

        </div>
      </div>
    </div>
    // </div>
  );
};

export default HomePage;
