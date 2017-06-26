import React from 'react';
import {Link} from 'react-router-dom';
import './../../App.css';

const Splash = () => {
    return (
        <div>
            <div className='parallax-1'></div>
            <div className='quote-container'>
                <p>“I am not the same, having seen the moon shine on the other side of the world.”<br /><span className='quote-author'>– Mary Anne Radmacher</span></p>
            </div>
            <div className='parallax-2'></div>
            <div className='quote-container'>
                <p>"A mind that is stretched by a new experience can never go back to its old dimensions.”<br /><span className='quote-author'>– Oliver Wendell Holmes</span></p>
            </div>
            <div className='parallax-3'></div>
            <div className='quote-container'>
                <p>"Traveling – it leaves you speechless, then turns you into a storyteller.”<br /><span className='quote-author'>– Ibn Battuta</span></p>
            </div>
            <div className='parallax-4'></div>
            <div className='quote-container'>
                <h1 className='splash-logo'>wandr</h1>
                <p>An online journal for travelers</p>
                <div>
                    <Link to='/landing'><button className='cta-splash'>Start Writing</button></Link>
                </div>
            </div>
        </div>
        
    );
};

export default Splash;