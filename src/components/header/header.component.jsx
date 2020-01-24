import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import './header.style.scss';


const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <img src={logo} alt="My logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/signin">
                SIGNIN
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
        </div>
    </div>
)


export default Header;