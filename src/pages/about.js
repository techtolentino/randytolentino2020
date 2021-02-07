import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="rt-hero-about">
      <div className="rt-container">
        <div className="rt-hero-about-content">
          <hr className="divider" />
          <h1 className="rt-hero-contact-title">about</h1>
          <p>I’m a husband, father, son, brother – the identifiers go on, but I always define myself in some familial aspect, at the core.</p>

          <p>Real quick: I grew up in Cali, lived in Japan between middle and high school years, attended college in the Bay area, met my wife in ’06 and eventually we moved to San Diego to start a family.</p>

          <p>I dedicated my post-university years working in education. Still, most of my energy was directed towards being an <a href="https://medium.com/codebuddies/i-used-to-write-rhymes-now-i-write-software-bf5d2b27578" target="_blank" rel="noopener noreferrer" className="text-link-dark">independent hip-hop artist</a>. But as the family grew, I had to find an actual gig that would allow me to give them the life they deserved.</p>

          <p>After being accepted into a software engineering bootcamp, we moved out to Austin. That’s where I learned to code, established a new career, and fell in love with serving the world through technology.</p>

          <p className="rt-hero-subtitle">I wake up each morning between 3:00 and 4:00 AM, devoted to the dream and excited to see this all unfold. I’m glad you’re a part of the journey.</p>

        </div>
      </div>
    </section>
  </Layout >
)

export default AboutPage
