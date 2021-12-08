import React from 'react';
import YannickPerret from '../assets/images/YannickPerret.jpg';

const Presentation = () => {
    return (
        <div className="presentation">
            <div className="presentation__image">
                <img src={YannickPerret} alt="Yannick Perret portrait" />
            </div>

            <div className="presentation__text">
                <h1>Développeur Web futuriste avec une machine à écrire ! </h1>
                    <p>
                    Longtemps passionné par la bidouille et la technologie, je fais mes premiers essais sur Linux alors que la version la plus populaire est Fedora 10. Recherchant sans cesse comment installer tel logiciel, modifier tel interface et ajouter des fonctionnalités.<br /><br />
                    C'est alors que je découvre un monde magique qui est le développement Web. Tout de suite émerveillé je ne m'arrête pas de créer des sites en Xhtml avec des Tables (oui oui à l'époque on les créait via des tables ^^), pour gentiment voir qu'il existe des langages donnant accès à beaucoup d'autres fonctionnalités (coucou... Ruby, C, Php, Pascal et Visual ).<br />
                    C'est à lors que je tombe amoureux du PHP qui me suivra de longues années. <br /><br />

                    Souhaitant en faire mon métier, je me rapproche des études d'informatique... développe des sites internet dans la majorité des cours (oui j'aurai dû un peu plus écouté les cours de réseau à la place de faire du Web =) ). Avec un papier et l'envie de travailler dans ce milieux je me lance à la recherche d'un premier travail, sauf que la vie me met des bâtons dans les roues et m'obligent à m'arrêter pendant 2 ans et demi.<br /><br />

                    Aujourd'hui plus que jamais je m'amuse à développer des sites professionnels pour des clients et pour des amis. Vous trouverez ici mes compétences, projets terminé, en cours ou à venir.<br></br>
                    <br />
                    N'hesitez pas à me contactez une question ou un projet à me soumettre !<br />
                </p>                
            </div>
        </div>
    );
};

export default Presentation;