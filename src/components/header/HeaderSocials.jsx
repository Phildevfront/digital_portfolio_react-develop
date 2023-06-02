import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands';



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/philippe-baurens/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
        <a href='https://github.com/Phildevfront' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>

    </div>
  )
}

export default HeaderSocials