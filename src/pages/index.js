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
          <h1 className="rt-hero-title">maker</h1>
          <p className="rt-hero-subtitle">Safety and wellness to you and your people.<br /><br />My name's Randy Tolentino, I'm a Software Developer & Product Design Lead, currently building enterprise security products at IBM. Outside of work, I focus on thought leadership as a  published writer.<br /><br />You can learn more about me <Link className="text-white" to="/about">here</Link> if you'd like, otherwise, feel free to have a look at my work.</p>
          <Link className="rt-link-white" to="/work">view portfolio ▸</Link>
          <Link className="rt-link-dark" to="/writing">latest writing ▸</Link>
        </div>
      </div>
    </section>
  </Layout >
)

export default IndexPage
