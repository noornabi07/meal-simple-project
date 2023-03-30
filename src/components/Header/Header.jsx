import React from 'react';
import img from '../../../public/logo-small.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={img} alt="" />
            <div className='menu'>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/contact">Contact</a>
                <a href="/review">Order Review</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;