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
      <p className="rt-block-signup-form-description">{description}</p>
      <p>Last thing, you can also sign up for my monthly newsletter if you’d like. I send my subscribers an email of stories on the first Monday of the month.</p>
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