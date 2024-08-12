import React from 'react';
import Title from '../Title/Title';
import { Link } from 'react-router-dom';
import './Lamarket.css';
const Lamarket = () => {
    return (
        <div className="lamarket-container">
            <div className="lamarket-content">
                <Title />
                <h2 className="lamarket-subtitle">
                    Empowering Brands with Comprehensive Digital Strategies, from Concept to Execution.
                </h2>
                <Link to="/Lamarket2" className="lamarket-link">
                    Voir Plus
                </Link>
            </div>
        </div>
    );
};

export default Lamarket;