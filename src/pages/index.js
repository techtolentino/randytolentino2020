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
          <p>I’m write code for a living. Off hours, I focus on thought leadership and people-development as a freelance writer and independent hip hop artist.</p>
          <p className="rt-hero-subtitle">You can learn more about me <Link
            className="text-link-dark"
            to="/about"
          >here</Link>, otherwise, feel free to check out some of the work.</p>
          <Link className="rt-link-white" to="/work">view my work ▸</Link>
          <Link className="rt-link-dark" to="/writing">latest writing ▸</Link>
        </div>
      </div>
    </section>
  </Layout >
)

export default IndexPage
