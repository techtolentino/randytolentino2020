import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NotebookIcon from "../images/notebook.png"
import MacIcon from "../images/mac.png"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="rt-hero-contact">
      <div className="rt-container">
        <div className="rt-hero-contact-content">
          <hr className="divider-alt" />
          <h1 className="rt-hero-contact-title">about</h1>
          <p>I’m a husband, father, son, brother–the identifiers go on, but I always define myself in some familial aspect, at the core.</p>
          <p>I grew up in California, then our family moved to Japan when I was in middle school. We lived overseas all the way up until I graduated high school.</p>

          <p>From there, I moved out to the Bay area for school. I spent many years working in various educational settings. In 2006, I met my wife, then we moved back down to San Diego and started a family.</p>

          <p>We’re currently just outside the Austin area, and it’s treated the family well. But just as a heads up, we’re on our way to Colorado to explore new sights and experience the next phase of our lives.</p>

          <p className="rt-hero-subtitle">It’s just a matter of time.</p>

        </div>
      </div>
    </section>
  </Layout >
)

export default AboutPage
