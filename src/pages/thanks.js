import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EmailForm from "../components/emailForm"

const ThanksPage = () => (
  <Layout>
    <SEO title="Thanks" />
    <section className="rt-hero-contact">
      <div className="rt-container">
        <div className="rt-hero-contact-content">
          <hr className="divider-alt" />
          <h1 className="rt-hero-contact-title">thanks</h1>
          <p>Super excited to have you on the journey. I’m currently working on a few things (in various formats) that will be set to release on a week by week basis, and I promise to keep you informed.</p>

          <p>Stay tuned!<br />I appreciate you.</p>
          <p>Randy</p>
        </div>
      </div>
    </section>
  </Layout >
)

export default ThanksPage
