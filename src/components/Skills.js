import React, { useState } from 'react';
import skillData from '../data/skillsData';
import SkillCards from './SkillCards';

const Skills = () => {
    const [categorieChoise, setCategorieChoise] = useState([]);

    return (

        <>
            <div className="skill_container">
                <div className="skill_container__list">
                    <ul className="skill_container__categories">
                        {skillData.map((element) => (
                            <li key={element.id} onClick={(()=> {setCategorieChoise(element)})}>{element.categorie}</li>
                        ))}
                    </ul>    
                </div>
                <div className="skill_container__cards">
                    <SkillCards categorie={categorieChoise}/>
                </div>
            </div>
        </>
    );
};

export default Skills;