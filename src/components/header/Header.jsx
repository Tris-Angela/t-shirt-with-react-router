import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
           <Link to='/'>Home</Link>
           <Link to='/review'>Order Review</Link>
           <Link to='/contact'>Contact</Link>
           <Link to='/logout'>Log Out</Link>
        </nav>
    );
};

export default Header;