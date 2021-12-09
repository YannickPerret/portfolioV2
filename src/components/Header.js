import React from 'react';
import { Link } from 'react-router-dom';
import email from '../assets/images/email.png';

const Header = () => {
    return (
        <div className="header">
                <div className="header__logo">
                    <Link to="/" >Yannick Perret</Link>
                </div>
                <div className="header__mail">
                <img src={email} alt="icone pour envoyer un email" /><p> Contact@YannickPerret.com </p>
                </div>

                <div className='workInProgress'>
                    Work in progess !  :)
                </div>
        </div>
    );
};

export default Header;