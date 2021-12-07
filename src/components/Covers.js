import React from 'react';
import rocketSpace from '../assets/images/RocketShip.svg';

const Covers = () => {
    return (
        <div className="cover">
            <div className="stars"></div>
            <div className="clouds"></div>

            <div className="content">
                <div className="content__container">
                    <p className="content__container__text">
                    Explore
                    </p>
                    
                    <ul className="content__container__list">
                    <li className="content__container__list__item">world !</li>
                    <li className="content__container__list__item">the space !</li>
                    <li className="content__container__list__item">ilusion !</li>
                    <li className="content__container__list__item">everybody !</li>
                    </ul>
                </div>
            </div>
            <div className="cover__scroll">
                <img src={rocketSpace} alt="Rocket scrolle en bas" /> Scroll pour découvrir
            </div>
        </div>
    );
};

export default Covers;

//https://codepen.io/yoannhel/pen/sJpDj