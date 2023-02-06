import React from 'react'
import logo from './assets/feladat1-logo.svg';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <img src={logo} alt="Akvarium logo" />
        /*olasz billentyuzet nincs ekezetem*/
            <h1>Akvarium</h1>
        </div>
    );
}

export default Header;