import React from 'react';

const SkillCards = ({categorie}) => {
    console.log(categorie);
    return (
        <div className="skill_card__content">
            <h1 className="skill_card__content__title">{categorie.categorie}</h1>
            <h2 style={{color: 'blue'}}>{categorie.skill}</h2>
        </div>
    );
};

export default SkillCards;