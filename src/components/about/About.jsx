import React from 'react'
import './about.css'
import CTA from '../header/CTA';
import ME from '../../assets/philHD.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faUsers,faListCheck } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={ME} alt="About image" /> */}
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FontAwesomeIcon icon={faAward} className="about__icon" />
              <h5>Experience</h5>
              <small>Lorem...</small>
            </article>
            <article className="about__card">
              <FontAwesomeIcon icon={faUsers} className="about__icon" />
              <h5>Clients</h5>
              <small>Lorem...</small>
            </article>
            <article className="about__card">
              <FontAwesomeIcon icon={faListCheck} className="about__icon" />
              <h5>Projects</h5>
              <small>Lorem...</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About