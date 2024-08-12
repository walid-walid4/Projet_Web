import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Programs.css';
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';

const Programs = () => {
    const navigate = useNavigate();

    const handleHealthexpClick = () => {
        navigate('/healthexp');
    };

    const handleLabotechClick = () => {
        navigate('/labotech');
    };

    const handlePlenitudeClick = () => {
        navigate('/Plenitudeconseil');
    };

    return (
        <div className='programs'>
            <div className="program" onClick={handleHealthexpClick}>
                <img src={program_1} alt="Healthexp" />
                <div className="caption">
                    <img src={program_icon_1} alt="Healthcare Expertise Icon" />
                    <p>Healthcare Expertise</p>
                </div>
            </div>
            <div className="program" onClick={handleLabotechClick}>
                <img src={program_2} alt="Labo-Tech" />
                <div className="caption">
                    <img src={program_icon_2} alt="Labo-Tech Icon" />
                    <p>Labo-Tech</p>
                </div>
            </div>
            <div className="program" onClick={handlePlenitudeClick}>
                <img src={program_3} alt="Plenitude-Conseil" />
                <div className="caption">
                    <img src={program_icon_3} alt="Plenitude-Conseil Icon" />
                    <p>Plenitude-Conseil</p>
                </div>
            </div>
        </div>
    );
};

export default Programs;
