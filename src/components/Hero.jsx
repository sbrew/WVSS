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
    </div>
  );
};

export default Hero;
