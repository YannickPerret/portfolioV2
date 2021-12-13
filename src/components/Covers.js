import React from 'react';


const Covers = () => {
    return (
        <div className="cover">
            <div className="stars"></div>
            <div className="clouds"></div>

            <div className="content">
                <div className="content__container">
                    <p className="content__container__text">
                        Develop
                    </p>
                    
                    <ul className="content__container__list">
                    <li className="content__container__list__item">your world !</li>
                    <li className="content__container__list__item">the space !</li>
                    <li className="content__container__list__item">a good ilusion !</li>
                    <li className="content__container__list__item">for everybody !</li>
                    </ul>
                </div>

                <div className="content__container__button">
                    <button className="button__discover">À propos de moi</button>
                    <button className="button__discover">Voir mes projets</button>

                </div>

            </div>


           

            <div className="cover__scroll">
            <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 9V14.0909" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M19 9.90909C19 4.98874 14.9706 1 10 1C5.02944 1 1 4.98874 1 9.90909V20.0909C1 25.0113 5.02944 29 10 29C14.9706 29 19 25.0113 19 20.0909V9.90909Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg> Scroll pour découvrir
            </div>
        </div>
    );
};

export default Covers;

//https://codepen.io/yoannhel/pen/sJpDj