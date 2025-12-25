import React from 'react';
import PageHeader from './PageHeader';
import ContactForm from './ContactForm'; // Import the ContactForm component
import './Contact.css';

function Contact() {
  return (
    <div>
      <PageHeader title="Contact Us" />
      <div className="contact-us">
        <section className="contact-form-section">
          <div className="contact-info">
            <h2>Contact the Windermere Valley Snowmobile Society</h2>
            <p><strong>Location:</strong> Box 2913, Invermere, BC V0A 1K0</p>
            <p><strong>Mailing Address:</strong> Box 2913, Invermere, BC V0A 1K0</p>
            <p><strong>Office Hours:</strong> 7 Days a Week, 8:30am to 4:30pm</p>
            <p><strong>Email:</strong> wvss.snow@gmail.com</p>
          </div>
          <div className="board-members">
              <h3>Board Members</h3>
              <ul>
                <li><strong>President:</strong> Darcy Lehr</li>
                <li><strong>Vice President:</strong> Mike Walsh</li>
                <li><strong>Director:</strong> Aaron Nickerson</li>
                <li><strong>Director:</strong> Jye Carder</li>
                <li><strong>Sponsorship:</strong> Mark Starr</li>
                <li><strong>Treasurer:</strong> Rob Mcsheffrey</li>
                <li><strong>Social Media:</strong> AJ Magrath</li>
                <li><strong>Grooming:</strong> Rich Martin</li>
                <li><strong>Grooming:</strong> Garret Brockmeyer</li>
              </ul>
            </div>
        </section>
        <h1>Send us an email</h1>
        <ContactForm
          templateId={'template_2xp111l'}
        />
      </div>
    </div>
  );
}

export default Contact;
