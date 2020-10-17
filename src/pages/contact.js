import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EmailForm from "../components/emailForm"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="rt-hero-contact">
      <div className="rt-container">
        <div className="rt-hero-contact-content">
          <h1 className="rt-hero-contact-title">contact</h1>
          <hr className="divider" />
          <p>I’m super easy to reach.<br /><br />If you’d like to connect on anything related to career growth, code, design, or writing, please feel free to get in touch. You can <a className="text-link-dark" href="mailto:makertolentino@gmail.com" target="_blank" rel="noopener noreferrer">send me a message</a> or find me on the socials.</p>
          <p>You can also sign up for my monthly newsletter (if you’d like). I send my subscribers an email of personal stories and updates on the first Monday of the month.</p>

          <div className="rt-block-container">
            <EmailForm title="Stay up to date" />
          </div>
        </div>
      </div>
    </section>
  </Layout >
)

export default ContactPage
