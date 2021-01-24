import React, { useState, useEffect } from 'react';
import logo from '../../../assets/img/Logo.jpeg'
import Link from '../Link/Link';
import '../../../App.css'
const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navClass = '';
      if (window.scrollY >= 200) {
        navClass = 'scrolled';
      }
      setNavClass(navClass);
    });
  }, []);
  return (
    <nav className={`navbar navbar-expand-md bg-light ${navClass}`}>
      <div className='container'>
        <a className='navbar-brand' href='!#'>
          <span><img src={logo} width={120} height={80}/></span>
          {/* <i className='fas fa-circle ml-1' /> */}
        </a>
        <div
          className={`navbar-toggler nav-icon ${(() => {
            if (toggeledNav) return 'open';
            return '';
          })()}`}
          onClick={toggleNav}
        >
          <span />
          <span />
          <span />
        </div>

        <div
          className={`collapse navbar-collapse ${(() => {
            if (toggeledNav) return 'show';
            return '';
          })()}`}
        >
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link target='home' offset={-120} classes='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='facillities' offset={-120} classes='nav-link'>
              Facillities
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='services' offset={-120} classes='nav-link'>
              Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='Chemicals & Coatings' offset={-120} classes='nav-link'>
              Chemicals & Coatings
              </Link>
            </li>
            <li className='nav-item'>
              <Link  offset={-120} classes='nav-link'>
              Safety
              </Link>
            </li>
            <li className='nav-item'>
              <Link  offset={-120} classes='nav-link'>
              Become a Partner
              </Link>
            </li>
            <li className='nav-item'>
              <Link  offset={-120} classes='nav-link'>
              Support
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link target='about' classes='nav-link'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='services' classes='nav-link'>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='blog' classes='nav-link'>
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='contact' classes='nav-link'>
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
