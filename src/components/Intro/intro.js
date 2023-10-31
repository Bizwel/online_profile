import React from 'react';
import './intro.css';
import introImg from '../../images/ID2-removebg-preview (1).png';
import btnImg from '../../images/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <spa className='introName'>Kolawole</spa><br />Website Designer, U1/UX Designer</span>
            <p className='introPara'> I am a skilled UI/UX Designer and a Website developer <br /> of repute. I create a dynamic and a highly intuitive <br /> and responsive websites with modern technology.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={introImg} alt='profile' className='introImg' />

    </section>
  )
}

export default Intro;