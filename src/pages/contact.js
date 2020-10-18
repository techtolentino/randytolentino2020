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
          <hr className="divider" />
          <h1 className="rt-hero-contact-title">contact</h1>
          <p>I’m super easy to reach.<br /><br />If you’d like to connect on anything related to career growth, code, design, music, or writing, please feel free to get in touch. You can <a className="text-link-dark" href="mailto:makertolentino@gmail.com" target="_blank" rel="noopener noreferrer">send a message</a> or find me on the socials.</p>
          <p>You can also sign up for my newsletter if you’d like to stay up to date with some of my latest projects.</p>

          <div className="rt-block-container">
            <EmailForm title="Stay up to date" />
          </div>
        </div>
      </div>
    </section>
  </Layout >
)

export default ContactPage
