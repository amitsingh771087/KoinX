import React, { useState } from 'react';
import Logo from '../../assets/Logo.png'
import './Style.css'


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };
  return (
   
    <nav className="header-container">
    <div className="header-left">
      <img src={Logo} alt="Logo" />
    </div>
    <div className="header-right">
      <ul className={showMenu ? 'show-menu' : ''}>
        <li>Crypto Tax</li>
        <li>Free Tools</li>
        <li>Resource Center</li>
        <li>
          <button className="blue-button">Get Started</button>
        </li>
      </ul>
      <div className={`menu-icon ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  </nav>
 
  )
}

export default Header