import React, { useState, useEffect } from 'react';
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
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);  // Track which dropdown is open
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on load and resize
  const handleResize = () => {
    if (window.innerWidth <= 1220) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize(); // Check size initially
    window.addEventListener('resize', handleResize); // Update on resize

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(index === openDropdownIndex ? null : index);  // Toggle dropdown open/close
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Scroll to the top of the page when a link is clicked
  const handleLinkClick = () => {
    if (isMobile) {
      window.scrollTo(0, 0);  // Scroll to top
      setIsMenuOpen(false);   // Close the menu after clicking the link
    }
  };

  const menuList = () => {
    return (
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink 
            to="/WVSS/" 
            className="nav-link" 
            activeClassName="active" 
            onClick={handleLinkClick}  // Scroll to top when clicked
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <a 
            href="https://app.amilia.com/store/en/windermere-valley-snowmobile-club/shop/programs/91912?subCategoryIds=5317994" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link"
            onClick={handleLinkClick}  // Scroll to top when clicked
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
            onClick={handleLinkClick}  // Scroll to top when clicked
          >
            Trail Passes
          </a>
        </li>
        <li 
          className={`nav-item ${isMobile && openDropdownIndex === 0 ? 'club-open' : ''}`} 
          onMouseEnter={() => toggleDropdown(0)} 
          onMouseLeave={() => toggleDropdown(0)}
        >
          <span className="nav-link">Club</span>
          {openDropdownIndex === 0 && (
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/about" onClick={handleLinkClick}>About</NavLink>
              </li>
              {/* <li>
                <NavLink to="/donate" onClick={handleLinkClick}>Donate</NavLink>
              </li> */}
              <li>
                <NavLink to="/volunteer" onClick={handleLinkClick}>Volunteer</NavLink>
              </li>
              <li>
                <NavLink to="/sponsors" onClick={handleLinkClick}>Sponsors</NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={handleLinkClick}>Contact Us</NavLink>
              </li>
            </ul>
          )}
        </li>
        <li 
          className={`nav-item ${isMobile && openDropdownIndex === 1 ? 'conditions-open' : ''}`} 
          onMouseEnter={() => toggleDropdown(1)} 
          onMouseLeave={() => toggleDropdown(1)}
        >
          <span className="nav-link">Conditions</span>
          {openDropdownIndex === 1 && (
            <ul className="dropdown-menu">
              <li><a href="https://www.mountain-forecast.com/peaks/Pigeon-Spire/forecasts/2500" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Pigeon Spire Forecast</a></li>
              <li><a href="https://www.mountain-forecast.com/peaks/Mount-Farnham/forecasts/2500" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Mount Farnham Forecast</a></li>
              <li><a href="https://avalanche.ca/map" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Avalanche Conditions</a></li>
            </ul>
          )}
        </li>
        <li 
          className={`nav-item ${isMobile && openDropdownIndex === 2 ? 'riding-areas-open' : ''}`} 
        >
          <NavLink 
            to="/riding-areas" 
            className="nav-link" 
            activeClassName="active" 
            onClick={handleLinkClick}  // Scroll to top when clicked
          >
            Riding Areas
          </NavLink>
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
