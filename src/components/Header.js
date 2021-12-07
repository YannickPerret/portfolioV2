import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
                <div className="header__logo">
                    <Link to="/" >Yannick Perret</Link>
                </div>
                <div className="header__mail">
                     <p>@ Contact@YannickPerret.com </p>
                </div>
                
        </div>
    );
};

export default Header;