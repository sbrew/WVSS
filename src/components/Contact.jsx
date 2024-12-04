import React from 'react';
import PageHeader from './PageHeader';
import ContactForm from './ContactForm'; // Import the ContactForm component
import './Contact.css';

function Contact() {
  const handleContactSubmit = (formData) => {
    // Handle form submission for Contact Us page
    console.log('Contact Form Submitted:', formData);
  };

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
                <li><strong>Director:</strong> JoAnne McLennan</li>
                <li><strong>Director:</strong> Jye Carter</li>
                <li><strong>Director:</strong> Jon Welsh</li>
              </ul>
            </div>
        </section>
        <h1>Send us an email</h1>
        <ContactForm onSubmit={handleContactSubmit} /> {/* Use the same form here */}
      </div>
    </div>
  );
}

export default Contact;
