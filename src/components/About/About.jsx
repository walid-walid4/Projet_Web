import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about_img' />
            </div>
            <div className="about-right">
                <h3>About Us:</h3>
                <h2 className="blue-heading">Shaping the Future Together</h2>
                <p>
                    At the cutting edge of the digital revolution, Plénitude Groupe stands as a visionary 4.0 consulting firm, redefining the way consulting services are delivered. Our innovative approach and unwavering commitment to delivering tangible results set new standards in the industry, providing our clients with genuine added value. What sets us apart is our exceptional blend of skills and expertise.
                </p>
                <p>
                    Driven by a passion for excellence, innovation, and adaptability, our highly qualified and multicultural team of consultants works tirelessly to understand the unique needs of each client. We design bespoke solutions that address their specific challenges, ensuring success in a rapidly evolving digital landscape.
                </p>
            </div>
        </div>
    );
}

export default About;
