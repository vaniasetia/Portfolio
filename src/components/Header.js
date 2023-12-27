import React from 'react';

const Header = () => {
  return (
    <header>
      <a href="#" className="logo">Devlo<span>pe</span>r..</a>
      <ul className="navlist">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="bx bx-menu" id="menu-icon"></div>
    </header>
  );
}

export default Header;