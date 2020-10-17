import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="rt-hero">
      <div className="rt-container">
        <div className="rt-hero-content">
          <h1 className="rt-hero-title">hello</h1>
          <hr className="divider" />
          <p>My name’s Randy Tolentino.</p>
          <p>I’m a UX Engineer. Outside of work, I focus on thought leadership and people-development as a freelance writer and artist.</p>
          <p className="rt-hero-subtitle">You can learn more about me <Link
            className="text-purps"
            to="/about"
          >here</Link>, otherwise, feel free to check out some of my work.</p>
          <Link className="rt-link-white" to="/work">view my work ▸</Link>
          <Link className="rt-link-dark" to="/writing">latest writing ▸</Link>
        </div>
      </div>
    </section>
  </Layout >
)

export default IndexPage
