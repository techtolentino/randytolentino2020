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
          <p>First and foremost, safety and wellness to you and your people.</p>
          <p>Hello hello! 👋</p>
          <p>My name’s Randy Tolentino (@makertolentino).</p>
          <p>I’m a Software Developer & Product Design Lead, currently building enterprise security products at IBM. Outside of work, I focus on thought leadership and self-development as a freelance writer.</p>
          <p className="rt-hero-subtitle">You can learn more about me <Link className="text-white" to="/about">here</Link>, otherwise, feel free to check out some of my work.</p>
          <Link className="rt-link-white" to="/work">view portfolio ▸</Link>
          <Link className="rt-link-dark" to="/writing">latest writing ▸</Link>
        </div>
      </div>
    </section>
  </Layout >
)

export default IndexPage
