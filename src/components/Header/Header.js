import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header-nav'>
            <img src={logo} alt="" />
            <div className='nav-a'>
            <a href="\home">Home</a>
            <a href="\shop">Shop</a>
            <a href="\inventory">Inventory</a>
            <a href="\about us">About US</a>
            </div>
        </nav>
    );
};

export default Header;