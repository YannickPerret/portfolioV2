import React from 'react';
import Covers from '../components/Covers';
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';



const Home = () => {
    return (
        <div className="main">
            <Header/>
            <Covers />
            <Presentation />
            <Skills />
        </div>
    );
};

export default Home;