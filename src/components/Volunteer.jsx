import React from 'react';
import PageHeader from './PageHeader';
import ContactForm from './ContactForm'; // Import the reusable form component
import './Volunteer.css';

function Volunteer() {
  return (
    <div>
      <PageHeader title="Volunteer" />
      <section className="volunteer-page">
        <div className="volunteer-content">
          <div className="volunteer-header">
            <h3>Volunteer with us</h3>
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
              >
                <path d="M256-6.4c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zm64.057 159.299h-49.041c-7.42 0-14.918 7.452-14.918 12.99v19.487h63.723c-2.081 28.41-6.407 64.679-6.407 64.679h-57.566v159.545h-63.929v-159.545h-32.756v-64.474h32.756v-33.53c0-8.098-1.706-62.336 70.46-62.336h57.678v63.183z"></path>
              </svg>
            </a>
          </div>
          <p>
            From time to time our club representatives need a helping hand,
            there is a lot of work year-round that goes into maintaining a
            snowmobile club. Please follow us on Facebook to see all call-outs
            for help. This is the easiest way for us to get the word out. Also,
            this information is emailed to our members when we have work-bees
            and when we need a little extra help.
          </p>
        </div>

        <div className="volunteer-form-container">
          <h3>Become a Volunteer</h3>
          <ContactForm
            templateId={'template_wt3zj4f'}
          />
        </div>
      </section>
    </div>
  );
}

export default Volunteer;
