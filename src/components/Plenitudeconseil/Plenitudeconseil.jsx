// Plenitudeconseil.jsx
import React from 'react';
import './Plenitudeconseil.css';
import plenitudeImage from '../../assets/Plenitude.png';

const Plenitudeconseil = () => {
    return (
        <div className="plenitudeconseil">
            <div className="text-section">
                <h1>LAB-IT by PLENITUDE GROUPE: Your Partner in Healthcare IT Solutions</h1>
                <p>
                    Plénitude Conseil offers a comprehensive range of advisory services designed to enhance the organization, management, and development of businesses and organizations, facilitating their transformation and growth. Our expertise spans both the private and public sectors, where we bring a wealth of experience in organizational consulting.

                    Our services include:
                    <br />
                    <b>Organizational Diagnostics: </b>We assess your current organizational structure and processes to identify areas for improvement, ensuring your business operates efficiently and effectively.
                    <br />
                    <b>Project Feasibility Studies and Business Planning:</b> We assist in the development of detailed project studies and business plans that provide a roadmap for successful implementation and growth.
                    <br />
                    <b>Organizational Structuring:</b> We help design and optimize your organizational structure, including the creation of clear, functional organizational charts and role definitions to streamline operations.
                    <br />
                    <b>Internal Control:</b> We implement robust internal control systems to safeguard your assets, ensure accuracy in financial reporting, and promote operational efficiency.
                    <br />
                    <b>Accounting Systems Setup: </b>We establish both general and analytical accounting systems tailored to your specific needs, providing a solid foundation for financial management.
                    <br />
                    <b>Procedure Manuals Development:</b> We craft comprehensive manuals for your accounting and general procedures, ensuring consistency and compliance across your organization.
                </p>
            </div>
            <div className="image-section">
                <img src={plenitudeImage} alt="Plenitude Conseil" />
            </div>
        </div>
    );
};

export default Plenitudeconseil;
