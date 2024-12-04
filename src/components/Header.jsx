import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active styling
import './Header.css';

import logo from '../assets/wvss-logo-colour.jpg';

const getMembershipYears = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const startYear = today.getMonth() >= 9 ? currentYear : currentYear - 1;
  const endYear = startYear + 1;
  return `${startYear}/${endYear}`;
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [conditionsDropdownOpen, setConditionsDropdownOpen] = useState(false);
  const [clubDropdownOpen, setClubDropdownOpen] = useState(false);

  const toggleConditionsDropdown = () => {
    setConditionsDropdownOpen(!conditionsDropdownOpen);
  };

  const toggleClubDropdown = () => {
    setClubDropdownOpen(!clubDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuList = () => {
    return (
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <a 
            href="https://app.amilia.com/store/en/windermere-valley-snowmobile-club/shop/programs/91912?subCategoryIds=5317994" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link"
          >
            {`${getMembershipYears()} Membership`}
          </a>
        </li>
        <li className="nav-item">
          <a 
            href="https://app.amilia.com/store/en/windermere-valley-snowmobile-club/shop/programs/calendar/91913?view=month&scrollToCalendar=true" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link"
          >
            Trail Passes
          </a>
        </li>
        <li className="nav-item" onMouseEnter={toggleClubDropdown} onMouseLeave={toggleClubDropdown}>
          <span className="nav-link">Club</span>
          {clubDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/donate">Donate</NavLink>
              </li>
              <li>
                <NavLink to="/volunteer">Volunteer</NavLink>
              </li>
              <li>
                <NavLink to="/sponsors">Sponsors</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item" onMouseEnter={toggleConditionsDropdown} onMouseLeave={toggleConditionsDropdown}>
          <span className="nav-link">Conditions</span>
          {conditionsDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="https://www.mountain-forecast.com/peaks/Pigeon-Spire/forecasts/2500" target="_blank" rel="noopener noreferrer">Pigeon Spire Forecast</a></li>
              <li><a href="https://www.mountain-forecast.com/peaks/Mount-Farnham/forecasts/2500" target="_blank" rel="noopener noreferrer">Mount Farnham Forecast</a></li>
              <li><a href="https://avalanche.ca/map" target="_blank" rel="noopener noreferrer">Avalanche Conditions</a></li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <NavLink to="/riding-areas" className="nav-link" activeClassName="active">Riding Areas</NavLink>
        </li>
      </ul>
    );
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Club Logo" className="logo" />
      </div>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        {isMenuOpen && (
          <button className="close-menu" onClick={closeMenu} aria-label="Close menu">×</button>
        )}
        {menuList()}
      </nav>
      {!isMenuOpen && (
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>
      )}
    </header>
  );
}

export default Header;
