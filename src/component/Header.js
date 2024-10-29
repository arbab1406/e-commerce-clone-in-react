import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import './Header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="logo"><img src='../../logo.PNG' alt='Logo'/></div>
      <div className="header-right">
        <FontAwesomeIcon icon={faBell} className="icon" />
        <select className="country-dropdown">
          <option value="us">US</option>
          <option value="uk">UK</option>
          <option value="fr">UAE</option>
          <option value="de">IN</option>
        </select>
        <div className="user-profile">
          <img src='../../profile.jpg' alt="User" className="profile-pic" />
          <span className="user-name">Abdullah</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
