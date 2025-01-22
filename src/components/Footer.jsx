import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import footerImage from '../assets/footer-cap-2.jpg'; // Ensure path is correct

function Footer() {
  return (
    <footer className="footer">
      <div 
        className="footer-background"
        style={{
          backgroundImage: `url(${footerImage})`, // Check if this path is correct
        }}
      >
        <div className="footer-content">
          <div className="social-links">
            <a 
              href="https://www.facebook.com/WindermereValleySnowmobiling/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="facebook-icon"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a 
              href="https://www.instagram.com/windermerevalleysnowmobile/?fbclid=IwY2xjawGY2rRleHRuA2FlbQIxMAABHaAG13HumlS-QDnTs9p0lqAGdS3aVZhpEaYsHg_T85e7Pa57_ZSx0o2mzw_aem_QrtpJPnB-b5PUgkUjTS3fA" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="instagram-icon"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <p className="footer-text">&copy; 2024 WVSS Snowmobile Club. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
