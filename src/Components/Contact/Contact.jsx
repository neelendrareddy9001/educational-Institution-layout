import React from 'react'
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message<img src={msg_icon}></img></h3>
        <p>Feel free to reachh out through contact from or find our contact information below. Your feedback, questionns and suggestions are important to us as we are strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon}></img> Contact@dev.gamil.com</li>
            <li><img src={phone_icon}></img> +1 123-456-789</li>
            <li><img src={location_icon}></img> 77 Massachusetts Ave, Cambride <br /> MA 02139, United States</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your phone number' required />
            <label>Write your message</label>
            <textarea name='message' rows="6" placeholder='message' />
            <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow}></img>  </button>
        </form>
        <span>sending</span>
      </div>
    </div>
  )
}

export default Contact
