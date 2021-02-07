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
          <hr className="divider" />
          <h1 className="rt-hero-title">hello</h1>
          <p>My name’s Randy Tolentino.</p>
          <p>I write code for a living. Off hours, I focus on thought leadership and people-development as a freelance writer and independent hip hop artist.</p>
          <p className="rt-hero-subtitle">Learn a little bit about me <Link
            className="text-link-dark"
            to="/about"
          >here</Link>, otherwise, feel free to <Link className="text-link-dark" to="/work">view my work.</Link></p>
        </div>
      </div>
    </section>
  </Layout >
)

export default IndexPage
