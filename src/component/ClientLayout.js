import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faChartLine, faMedal, faMountain, faCertificate, faCalendarAlt, faMoon, faSun, faHome } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faFacebook, faGithub, faYoutube, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import './CustomLayout.css';
import ClientStatistic from './ClientStatistic';
import { Link } from 'react-router-dom';

const CustomLayout = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const menuItems = [
    { icon: faTachometerAlt, label: 'Dashboard', path: '/dashboard' },
    { icon: faUser, label: 'Profile', path: '/profile' },
    { icon: faChartLine, label: 'Platform', path: '/platform' },
    { icon: faMedal, label: 'Alpine Champion', path: '/alpine-champion' },
    { icon: faMountain, label: 'Mountain Rescue', path: '/mountain-rescue' },
    { icon: faCertificate, label: 'Certificate', path: '/certificate' },
    { icon: faCalendarAlt, label: 'Affiliate', path: '/affiliate' },
    { icon: faCalendarAlt, label: 'Economics Calendar', path: '/economics-calendar' },
  ];

  const socialLinks = [
    { icon: faInstagram, url: 'https://instagram.com' },
    { icon: faTiktok, url: 'https://tiktok.com' },
    { icon: faFacebook, url: 'https://facebook.com' },
    { icon: faGithub, url: 'https://github.com' },
    { icon: faYoutube, url: 'https://youtube.com' },
    { icon: faGooglePlay, url: 'https://play.google.com' },
  ];

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      
        <div className="left-side">
          <h2>Buy Evaluation</h2>
          <ul className="menu-list">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>
                  <FontAwesomeIcon icon={item.icon} /> {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
          <div className="dark-mode-toggle" onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </div>
          <Link to="/" className="home-button">
            <FontAwesomeIcon icon={faHome} /> Go Back to Home
          </Link>
        </div>
      <div className="right-side">
        <ClientStatistic />
      </div>
    </div>
  );
};

export default CustomLayout;
