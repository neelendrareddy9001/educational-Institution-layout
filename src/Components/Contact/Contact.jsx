import React from 'react'
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message<img src={msg_icon}></img></h3>
        <p>Feel free to reachh out through contact from or find our contact information below. Your feedback, questionns and suggestions are important to us as we are strive to provide exceptional service to our university community.</p>
        <ul>
            <li>Contact@dev.gamil.com</li>
            <li>+1 123-456-789</li>
            <li>77 Massachusetts Ave, Cambride <br /> MA 02139, United States</li>
        </ul>
      </div>
      <div className='contact-col'></div>
    </div>
  )
}

export default Contact
