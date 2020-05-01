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
          <hr className="divider-alt" />
          <h1 className="rt-hero-contact-title">contact</h1>
          <p>I’m super easy to reach.<br /><br />If you’d like to connect on anything related to career opportunities, software development, design, or freelance writing, please feel free to get in touch.<br /><br />You can either <a className="text-link-dark" href="mailto:makertolentino@gmail.com" target="_blank" rel="noopener noreferrer">send me a message</a> directly, or find me on the #1 social media platform on the planet (<a className="text-link-dark" href="https://linkedin.com/in/randytolentino" target="_blank" rel="noopener noreferrer">LinkedIn</a>).</p>

          <div className="rt-block-container">
            <EmailForm title="Stay up to date" />
          </div>
        </div>
      </div>
    </section>
  </Layout >
)

export default ContactPage
