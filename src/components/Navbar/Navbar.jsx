import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {

  const [stick, setStick] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 300 ? setStick(true) : setStick(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <nav className={`container ${stick ? 'dark-nav' : ''}`}>
      <Link to='home' smooth={true} offset={0} duration={500}>
        <img src={logo} alt="" className='logo' />
      </Link>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-300} duration={500}>Services</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='partners' smooth={true} offset={-290} duration={500}>Partners</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
