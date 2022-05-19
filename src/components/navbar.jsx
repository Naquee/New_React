
import "./navbar.css";

import React from 'react'

export const Navbar = () => {
  return (
    <>
    <nav className='main-nav'>
        <div className='logo'>
            <h2>LOGOBAKEREY</h2>

        </div>
        <div className='menue-links'>
            <a href='#'>Srevice</a>
            <a href='#'>Project</a>
            <a href='#'>About</a>
        </div>
        <div className='connect'>
            <button>Contact</button>

        </div>
    </nav>

    </>
  )
}

export default Navbar
