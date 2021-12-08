import React from 'react';

const SkillCards = ({categorie}) => {
    return (
        <div className="skill_card__content">
            <h1 className="skill_card__content__title">{categorie.categorie}</h1>
        </div>
    );
};

export default SkillCards;