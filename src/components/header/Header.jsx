import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/philHD1.png'
import HeaderSocials from './HeaderSocials.jsx'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Philippe BAURENS</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />

        <div className='me'>
          {/* <img src={ME}  alt='me' /> */}
        </div>

        <HeaderSocials />

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header