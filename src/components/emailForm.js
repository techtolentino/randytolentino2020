import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const EmailListForm = ({ title, description }) => {

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addToMailchimp(email)
      .then((data) => {
        if (typeof window !== `undefined`) window.location.replace(`/thanks`) // highlight-line
      })
      .catch((error) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <form className="rt-block-signup-form" onSubmit={handleSubmit}>
      <div className="rt-email">
        <input
          className="rt-email-input"
          placeholder="Enter your email address"
          name="email"
          type="email"
          required
          onChange={handleEmailChange}
        />
        <button className="rt-email-button" type="submit">Subscribe</button>
      </div>
    </form>
  );
};

export default EmailListForm;