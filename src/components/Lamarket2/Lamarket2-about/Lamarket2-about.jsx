// Lamarket2-about.jsx

import React from 'react';
import './Lamarket2-about.css';
import about2Image from '/src/assets/about2.png';

const Lamarket2About = () => {
    return (
        <div id="aboutus" className='lamarket2-about'>
            <div className="about-left">
                <img src={about2Image} alt="About Us" className='about2Image' />
            </div>
            <div className="about-right">
                <h2>Why Choosing Us?</h2>
                <p className='subtext'>
                    Welcome to your trusted digital agency. We’re dedicated to transforming brands through innovative digital strategies. Our expertise combines data-driven insights with creative excellence to make your brand shine. We believe that a brand is more than just a name or logo—it’s a promise to your audience. Let us craft the strategies that will elevate your brand and propel it to new heights.
                </p>
            </div>
        </div>
    );
}

export default Lamarket2About;
