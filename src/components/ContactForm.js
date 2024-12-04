import React, { useState } from 'react';
import './ContactForm.css'; // Optional: You can create a separate CSS file for the form styles

function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass the form data to the parent component when submitted
    setFormData({ name: '', email: '', comments: '' }); // Clear the form
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="comments">Questions or Comments</label>
      <textarea
        id="comments"
        name="comments"
        rows="4"
        value={formData.comments}
        onChange={handleChange}
      ></textarea>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default ContactForm;
