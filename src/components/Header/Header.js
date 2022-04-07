import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h2>Welcome To Tshirt Arena</h2>
            <Link to='/home'>Home</Link>
            <Link to='/order-review'>Order Review</Link>
        </div>
    );
};

export default Header;