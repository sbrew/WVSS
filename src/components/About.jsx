import React from 'react';
import './About.css';
import smallImage from '../assets/snowmoblie-skier-stoked-300x200.jpg';
import largeImage from '../assets/snowmoblie-skier-stoked-768x512.jpg';
import PageHeader from './PageHeader';

function About() {
  return (
    <div>
      <PageHeader title="ABOUT THE CLUB" />
      <div className="about">
        <div className="about-row">
          <div className="about-text">
            <p>
              Beginner and intermediate sledders will find lots to entertain them, while thrill-seekers will never run out of powder-filled playgrounds in the high alpine. Complete your epic day with a relaxing soak in the Radium Hot Springs and a bite to eat at any of our outstanding restaurants.
            </p>
          </div>
        </div>
        <div>
        <div className="about-facebook">
            <a
              rel="noreferrer noopener"
              target="_blank"
              className="facebook-link"
              href="https://www.facebook.com/WindermereValleySnowmobiling"
            >
              <svg
                className="facebook-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{ height: '48px', width: '48px' }}
              >
                <path d="M256-6.4c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zm64.057 159.299h-49.041c-7.42 0-14.918 7.452-14.918 12.99v19.487h63.723c-2.081 28.41-6.407 64.679-6.407 64.679h-57.566v159.545h-63.929v-159.545h-32.756v-64.474h32.756v-33.53c0-8.098-1.706-62.336 70.46-62.336h57.678v63.183z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="about-row">
          <div className="about-text">
            <p>
              The Windermere Snowmobile Society is a non-profit organization. The organization maintains the Forester Creek riding area. Over the last number of years the WVSS along with supporting partners has made some major improvements in trail maintenance hiring paid staff and a quota to groom more regularly.
            </p>
            <p>
              The Windermere Valley Snowmobile Society is a local non-profit club that has worked hard to keep riding areas in the Radium Hot Springs area open for future use. Annual memberships to the club are available online, trail passes can also be purchased at the Radium Hot Springs Visitor Centre.
              <br />
              <a href="https://www.facebook.com/WindermereValleySnowmobiling/" target="_blank" rel="noopener noreferrer">
                Follow the Windermere Valley Snowmobile Club on Facebook
              </a>
              .
            </p>
          </div>
          <div className="about-image">
            <img
              srcSet={`${smallImage} 300w, ${largeImage} 768w`}
              sizes="(max-width: 768px) 300px, 768px"
              src={largeImage}
              alt="Stoked on Catamount"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
