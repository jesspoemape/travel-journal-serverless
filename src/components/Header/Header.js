import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <Link to='/create-post'>
                <div className='create-post-btn'>
                    <h1>+</h1>
                </div>
            </Link>
        </div>
    );
};

export default Header;