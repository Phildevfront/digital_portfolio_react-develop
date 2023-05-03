import React from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHouseUser, faBook, faImage, faHandshake, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FontAwesomeIcon icon={faHouseUser} /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FontAwesomeIcon icon={faUser}/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FontAwesomeIcon icon={faBook}/></a>
      <a href='#portfolio'  onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FontAwesomeIcon icon={faImage}/></a>
      {/* <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FontAwesomeIcon icon={faHandshake}/></a> */}
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FontAwesomeIcon icon={faEnvelope}/></a>
    </nav>
  )
}

export default Nav