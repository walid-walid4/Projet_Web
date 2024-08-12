import React from 'react';
import './Home.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Home = () => {
    return (
        <div id="home" className="home container">
            <div className="home-text">
                <h1>Your Innovative Consulting Partner in the Digital Age</h1>
                <p>Passionately committed to digital transformation, Plénitude Groupe offers tailored solutions for the healthcare sector, combining technical expertise with deep knowledge of the needs of healthcare professionals.</p>
                <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    );
}

export default Home;
