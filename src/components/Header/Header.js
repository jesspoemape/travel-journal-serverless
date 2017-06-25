import React from 'react';
import './../../App.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <Link className='link' to='/'><h1 className='logo-name-desktop'>wandr</h1></Link>
            <Link className='link' to='/'><h1 className='logo-letter-mobile'>w</h1></Link>
            <Link to='/create-post'>
                <div className='create-post-btn'>
                    <h1>+</h1>
                </div>
            </Link>
        </div>
    );
};

export default Header;