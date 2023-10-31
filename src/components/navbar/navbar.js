
import React, { useState } from 'react';
import './navbar.css';
import logo from '../../images/logo3.png';
import contact from '../../images/contact.png';
import {Link} from 'react-scroll';
import menu from '../../images/menu.png';

const Navbar = () => {

    const [showMenu, setshowMenu] = useState(false);
  return (
        <div>
            <nav className='navbar'>
                <img  src={logo} alt='' className='logo' />
                <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-40} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-30} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-2} duration={500} className='desktopMenuListItem'>Clients</Link>
                </div>
                <button className='desktopMenuBtn' onClick={() => 
                    document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
                    <img src={contact}alt='contact' className='desktopMenuImg' />
                    Contact Me   
                </button>
                <img  src={menu} alt='menu' className='mobMenu' onClick={() => setshowMenu(!showMenu)} />
                <div className='navMenu' style={{display:showMenu ? 'flex' : 'none'} } >
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-30} duration={500} className='listItem' onClick= {() =>setshowMenu(false)} >About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setshowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-2} duration={500} className='listItem' onClick= {() => setshowMenu(false)}>Clients</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-2} duration={500} className='listItem' onClick= {() => setshowMenu(false)}>Contact</Link>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-40} duration={500} className='listItem' onClick={() => setshowMenu(false)}>Home</Link>
                </div>

            </nav>
        </div>    
    
  )
}

export default Navbar;