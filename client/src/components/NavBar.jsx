import React from 'react'
import{useRef} from 'react';
import{FaBars, FaTimes} from 'react-icons/fa';
import './NavBar.css'

function NavBar() {
    const navRef = React.useRef();
    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <header>
        <h3>Horoscope</h3>
        <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">Horoscope</a>
            <a href="/#">About Us</a>
            <a href="/#">contact</a>
            <a href="/#">Services</a>
            <a href="/#">FeedBack</a>
            <button className="nav-btn nav-close-btn" onClick={showNav}><FaTimes/></button>
          </nav>
          <button className="nav-btn" onClick={showNav}>
            <FaBars/>
          </button>
    </header>
  )
}

export default NavBar
