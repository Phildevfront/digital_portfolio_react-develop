import React, { useRef } from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x1eq8ma', 'template_lfcsgxr', form.current, 'yvPKOS5Wyvd_ovcYJ')

    e.target.reset()
  };
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FontAwesomeIcon icon={faEnvelope} className="contact__option-icon" />
            <h4><small>Contact - </small><span className='contact__option-text'>Email</span></h4>
            <a href="mailto:philippebaurens.dev@gmail.com" target="_blank" rel="noreferrer">Send</a>
          </article>
          <article className="contact__option">
          <FontAwesomeIcon icon={faLinkedin} className="contact__option-icon"/>
            <h4><small>Contact - </small><span className='contact__option-text'> LinkedIn</span></h4>
            <a href="https://www.linkedin.com/in/philippe-baurens/" target="_blank" rel="noreferrer">Leave</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      </section>
  )
}

export default Contact