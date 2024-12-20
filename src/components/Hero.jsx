import React from 'react';
import './Hero.css';
import desktopImage from '../assets/catamount-desktop.jpg';
import mobileImage from '../assets/catamount-mobile.jpg';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Conditionally set background images based on screen size */}
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url(${window.innerWidth > 768 ? desktopImage : mobileImage})`
        }}
      >
        <div className="hero-content">
          <div className="hero-text">
            <h1>Windermere Valley<br />Snowmobile Society</h1>
            <p>BC’s Best Kept Secret</p>
          </div>
        </div>
      </div>

      {/* Skip to Next Section Button (Icon) */}
      <div className="mk-skip-to-next">
        <svg
          className="mk-svg-icon"
          data-name="mk-jupiter-icon-arrow-bottom"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M512 121.6c0 8-3.2 16-8 22.4l-225.6 240c-6.4 6.4-14.4 9.6-24 9.6-8 0-16-3.2-22.4-9.6l-224-240c-11.2-12.8-11.2-33.6 1.6-44.8 12.8-12.8 32-11.2 44.8 1.6l201.6 214.4 203.2-216c11.2-12.8 32-12.8 44.8 0 4.8 6.4 8 14.4 8 22.4z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
