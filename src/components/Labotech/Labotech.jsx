import React from 'react';
import './Labotech.css';
import labotechImage from '../../assets/labotech.png'; // Make sure this path is correct

const Labotech = () => {
    return (
        <div className="labotech">
            <div className="text-section">
                <h1>LABO-TECH by PLENITUDE GROUPE:</h1>
                <p>
                    Plénitude Group's LAB-IT is an integrated IT engineering laboratory that guides you through the successful completion of your IT project, following a well-structured three-phase process:
                    <br />
                    <b> Project Design:</b> LAB-IT collaborates closely with you to conceptualize and design your project, ensuring it aligns with your vision and business objectives.
                    <br />
                    <b>Software Development:</b> LAB-IT specializes in the development of your project, offering expertise in desktop applications (both native and cross-platform), web applications (static and dynamic), and mobile applications for Android and iOS platforms.
                    <br />
                    <b>Project Deployment:</b>LAB-IT ensures the seamless deployment of your project, making it operational and ready to meet your business needs.
                    <br />
                    Whether you need a robust desktop application, a cutting-edge web solution, or a mobile app tailored for Android and iOS, Plénitude Group’s LAB-IT delivers high-quality, customized IT services to bring your project to life
                </p>
            </div>
            <div className="image-section">
                <img src={labotechImage} alt="Labotech" />
            </div>
        </div>
    );
};

export default Labotech;
