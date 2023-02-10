import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands';



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
        <a href='https://linkedin.com' target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
        <a href='https://linkedin.com' target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
        
    </div>
  )
}

export default HeaderSocials