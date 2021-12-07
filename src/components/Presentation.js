import React from 'react';
import rocketSpace from '../assets/images/spaceRocket.png';

const Presentation = () => {
    return (
        <div className="presentation">
                <div className="presentation__image">
                        <img src={rocketSpace} alt="Moi dans une fusée" />
                </div>

                <div className="presentation__text">
                     Aliquip ad tempor commodo deserunt mollit ipsum aliqua consectetur Lorem eu enim occaecat nostrud. Dolore ea labore elit laboris do excepteur. Anim pariatur aliqua id in irure id ea veniam quis ad qui occaecat. Reprehenderit minim ex Lorem et culpa voluptate exercitation consectetur aliquip. Occaecat nostrud voluptate minim sit aliqua do elit ea. Cillum incididunt amet nisi duis eiusmod elit minim.
                </div>
                <div className="presentation__skills">
                    <ul>
                        <li>JS</li>
                        <li> HTML</li>
                        <li> CSS</li>
                        <li>TEST</li>
                    </ul>
                </div>
        </div>
    );
};

export default Presentation;