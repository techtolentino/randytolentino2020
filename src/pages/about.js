import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="rt-hero-about">
      <div className="rt-container">
        <div className="rt-hero-about-content">
          <hr className="divider-alt" />
          <h1 className="rt-hero-contact-title">about</h1>
          <p>I’m a husband, father, son, brother – the identifiers go on, but I always define myself in some familial aspect, at the core.</p>

          <p>Quick rundown: grew up in Cali, lived in Japan for middle through high school, went to college in the Bay area, met my wife in ’06, moved to San Diego to start a family.</p>

          <p>I spent most of my post-university years working in education. I was also an independent hip-hop artist, but as the family grew, I had to figure out a real career path that would allow me to provide a better life for my fam.</p>

          <p>After being accepted into a software engineering bootcamp, we moved to Austin. Here, I learned to code and established a new career. Our experience in Austin has been phenomenal.</p>

          <p className="rt-hero-contact-subtitle">Next stop: Colorado! We’re currently figuring out how to transition into this next phase of our lives as a family and I wake up each day, excited to watch the dream unfold.</p>

        </div>
        <div className="rt-hero-about-facts">
          <h5 className="rt-work-section-item-title">Current status</h5>
          <ul className="rt-hero-current-list">
            <li>
              <span className="rt-hero-current-category">Writing:</span>
              <span className="rt-hero-current-pick"><Link className="text-link-dark" to="/contact">The Fresh Moon newsletter</Link></span>
            </li>
            <li>
              <span className="rt-hero-current-category">Reading:</span>
              <span className="rt-hero-current-pick"><em>The Making of a Manager</em> by Julie Zhuo<br /><em>The Motivation Manifesto</em> by Brendan Burchard</span>
            </li>
            <li>
              <span className="rt-hero-current-category">Listening:</span>
              <span className="rt-hero-current-pick">Khalid, Aesop Rock, Outkast</span>
            </li>
            <li>
              <span className="rt-hero-current-category">Studying:</span>
              <span className="rt-hero-current-pick"><em>Aspiring to Manage</em> by IBM Academy<br /><em>Create Your Own Economy</em> by Bob Proctor</span>
            </li></ul>
        </div>
      </div>
    </section>
  </Layout >
)

export default AboutPage
