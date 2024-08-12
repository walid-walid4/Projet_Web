import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Lamarket2-header.css';

const Lamarket2Header = () => {
    const [stick, setStick] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setStick(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <header className={`lamarket2-header ${stick ? 'dark-nav' : ''}`}>
            <div className="header-content">
                <div className="logo-container">
                    <Link
                        to="home"
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="logo-text"
                    >
                        Lamarket-com
                    </Link>
                </div>
                <nav className={`nav-links ${mobileMenu ? 'show-mobile-menu' : ''}`}>
                    <Link
                        to="home"
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Home
                    </Link>
                    <Link
                        to="services"
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Services
                    </Link>
                    <Link
                        to="aboutus"
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        About Us
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Lamarket2Header;
