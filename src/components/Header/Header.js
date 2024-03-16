import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src="/vectors/menu.svg" alt="Menu" className="menu-icon" />
      <span className="location"><img src="/vectors/location.svg" className="location-icon" /><p className="location-text">London, UK</p></span>
      <img src="/vectors/profile.svg" alt="Settings" className="settings-icon" />
    </div>
  );
};

export default Header;
