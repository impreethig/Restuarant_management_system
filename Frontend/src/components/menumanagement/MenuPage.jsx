import React from 'react';
import './MenuPage.css';
import {Link} from 'react-router-dom';
const MenuPage=()=>{
    return(
        <div className='Menu'>
            <h1>Order Your Food</h1>
            <div className='button'>
                <ul>
                    <nav>
                        <Link to="/reserve" style={{listStyle:'none'}}>
                            <li><button className="login-art">Table Reserverd</button></li>
                        </Link>
                    </nav>
                    <nav>
                        <Link to="/take" style={{listStyle:'none'}}>
                            <li><button className="login-art">Take a Way</button></li>
                        </Link>
                    </nav>
                    <nav>
                        <Link to="/delivery" style={{listStyle:'none'}}>
                            <li><button className="login-art">Take On Delivery</button></li>
                        </Link>
                    </nav>
                </ul>
            </div>
        </div>
    );
};
export default MenuPage;