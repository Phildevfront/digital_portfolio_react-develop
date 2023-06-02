import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>LOREM</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        {/* <li><a href='#services'>Services</a></li>
        <li><a href='#testimonials'>Testimonials</a></li> */}
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/philippe-baurens/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
        <a href='https://github.com/Phildevfront' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SNAPSHOT website All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer