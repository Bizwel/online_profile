import React from 'react';
import './works.css';
import PortfolioImg1 from '../../images/portfolio-1.png';
import PortfolioImg2 from '../../images/portfolio-2.png';
import PortfolioImg3 from '../../images/portfolio-3.png';
import PortfolioImg4 from '../../images/portfolio-4.png';
import PortfolioImg5 from '../../images/portfolio-5.png';
import PortfolioImg6 from '../../images/portfolio-6.png';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'> My Portfolio</h2>
        <span className='worksDesc'>I pay a rapt attention to details in making sure specifics meets the deliverables. And give a better experience in delivering the project as a masterpiece.</span>
        <div className='worksImgs'>
            <img src={PortfolioImg1} className='worksImg' alt='' />
            <img src={PortfolioImg2} className='worksImg' alt='' />
            <img src={PortfolioImg3} className='worksImg' alt='' />
            <img src={PortfolioImg4} className='worksImg' alt='' />
            <img src={PortfolioImg5} className='worksImg' alt='' />
            <img src={PortfolioImg6} className='worksImg' alt='' />
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  )
}

export default Works;
