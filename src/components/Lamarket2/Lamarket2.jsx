// Lamarket2.jsx

import React from 'react';
import './Lamarket2.css';
import Lamarket2Header from './Lamarket2-header/Lamarket2-header';
import Lamarket2Body from './Lamarket2-body/Lamarket2-body';
import Lamarket2Footer from './Lamarket2-footer/Lamarket2-footer';
import Lamarketservices from './Lamarketservices/Lamarketservices';
import Lamarket2About from './Lamarket2-about/Lamarket2-about';

const Lamarket2 = () => {
    return (
        <div className="lamarket2-container">
            <Lamarket2Header />
            <Lamarket2Body />
            <Lamarketservices />
            <Lamarket2About />
            <Lamarket2Footer />
        </div>
    );
}

export default Lamarket2;
