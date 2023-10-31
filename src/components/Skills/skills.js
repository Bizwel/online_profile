import React from 'react';
import './skills.css';
import UIDesign from '../../images/ui-design.png';
import WebDesign from '../../images/website-design.png';
import AppDesign from '../../images/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am a passionate UI/UX Designer cum web developer ready to build a cutting edge and intuitive websites using modern technology</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>Carefully crrafted design to meet you required development</p>

                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Web Design & Development</h2>
                    <p> We are known for designs that are highly traffic driven that define what you do and how your clients see you and the business</p>

                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>There's no excuse for not been mobile compliant. Our mobile designs are top notch.</p>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;