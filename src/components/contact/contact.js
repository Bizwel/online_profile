import React, { useRef } from 'react';
import './contact.css';
import Microsoft from '../../images/microsoft.png';
import Facebook from '../../images/facebook.png';
import Walmart from '../../images/walmart.png';
import Adobe from '../../images/adobe.png';
import FacebookIcon from '../../images/facebook-icon.png';
import YoutubeIcon from '../../images/youtube.png';
import TwitterIcon from '../../images/twitter.png';
import InstagramIcon from '../../images/instagram.png';
import FlowInsight from '../../images/FlowInsight.png';
import Victory from '../../images/victorytravels2.png';
import Airpearl from '../../images/Airpearl.png';
import Masarrah from '../../images/Masarrah logo.png';
import emailjs from '@emailjs/browser';




const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_214c998', 'template_ayybs7v', form.current, 'fWcXiP9SlVrwQqWnsttgj')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email sent');
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section className='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'> My Clients </h1>
            <p className='clientDesc'>I have had cause to work with notable companies. Some of the companies are</p>
            <div className='clientImgs'>
                <img src={FlowInsight} alt='' className='clientImg' />
                <img src={Victory} alt='' className='clientImg' />
                <img src={Airpearl} alt='' className='clientImg' />
                <img src={Masarrah} alt='' className='clientImg' /> 
            </div>
        </div>
        <div id='contact'>
            <h2 className='contactPageTitle'>Contact Me</h2>
            <span className='contactDesc'>Please fill the form below to discuss any work opportunity</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='user_name' />
                <input type='email' className='email' placeholder='Your Email' name='user_email' />
                <textarea className='msg' name='message' Rows='5' placeholder='Your Message'></textarea>
                {/* <button type='submit' value='Send' className='submitBtn'>Submit</button> */}
                <a className='btn' href=''>Submit</a>

                <br />
                <div className='links'>
                    <img src={FacebookIcon} alt='Facebook' className='link' />
                    <img src={TwitterIcon} alt='Twitter' className='link' />
                    <img src={YoutubeIcon} alt='YouTube' className='link' />
                    <img src={InstagramIcon} alt='Instagram' className='link' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;