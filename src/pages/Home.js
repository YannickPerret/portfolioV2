import React from 'react';
import Covers from '../components/Covers';
import Header from '../components/Header';
import Presentation from '../components/Presentation';



const Home = () => {
    return (
        <div className="main">
            <Header/>
            <Covers />
            <Presentation />
        </div>
    );
};

export default Home;