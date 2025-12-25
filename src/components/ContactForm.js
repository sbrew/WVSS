import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_3ucrobc',       // Service ID
      'template_2xp111l',   // Template ID
      formRef.current,
      'IcPZ0w7yKp-KTDpQX'           // Public Key
    )
    .then(() => {
      setStatus('success');
      formRef.current.reset();
    })
    .catch(() => {
      setStatus('error');
    });
  }

 
  return (
    <form ref={formRef} onSubmit={sendEmail} className="contact-form">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" required />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" required />
      <label htmlFor="message">Questions or Comments</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        required
      ></textarea>

      <button type="submit" className="submit-button">
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'success' && <p>Message sent successfully!</p>}
      {status === 'error' && <p>Something went wrong. Please try again.</p>}
    </form>
  );
}

export default ContactForm;
