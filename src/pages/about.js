import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Bench1 from "../images/bench_1.jpg"
import Bench2 from "../images/bench_2.jpg"
import Desk1 from "../images/desk_1.jpg"
import EndStand1 from "../images/endstand1.jpg"
import EndStand from "../images/endstand.jpg"
import GMM2 from "../images/gmm_2.png"
import GMM3 from "../images/gmm_3.png"
import GMM4 from "../images/gmm_4.png"
import GMM1 from "../images/gmm.jpg"
import HandSand from "../images/handsand.jpg"
import Hoodie0 from "../images/hoodie_0.jpg"
import Hoodie2 from "../images/hoodie_2.jpg"
import KeyHolder from "../images/keyholder.jpg"
import Speakers from "../images/speakers_1.jpg"

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

          <p className="rt-hero-subtitle">Next stop: Colorado! We’re currently figuring out how to transition into this next phase of our lives as a family and I wake up each day, excited to watch the dream unfold.</p>

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
    <section>
      <div className="rt-container">
        <div className="rt-about-content">
          <h4><strong>extra-curriculars</strong></h4>
          <p>In my spare time, I like to make things. Whether it’s woodwork, DIY projects, or design explorations, I love using the creative side of the brain.</p>
        </div>
        <div className="rt-about-gallery">
          <div className="rt-about-gallery-row">
            <img className="rt-about-gallery-img" src={KeyHolder} alt="DIY key and letter organizer" />
            <img className="rt-about-gallery-img" src={Speakers} alt="DIY speaker repaint" />
          </div>
          <div className="rt-about-gallery-row">
            <img className="rt-about-gallery-img" src={Hoodie0} alt="Sketch of plans to make hoodie" />
            <img className="rt-about-gallery-img" src={Hoodie2} alt="a hoodie I made (from scratch)" />
          </div>
          <div className="rt-about-gallery-row">
            <img className="rt-about-gallery-img" src={Bench1} alt="modern bench I made from wood" />
            <img className="rt-about-gallery-img" src={Bench2} alt="modern bench I made from wood" />
          </div>
          <div className="rt-about-gallery-row">
            <img className="rt-about-gallery-img" src={EndStand1} alt="DIY end tables, work in progress" />
            <img className="rt-about-gallery-img" src={EndStand} alt="DIY end tables, finished" />
          </div>
          <div className="rt-about-gallery-row">
            <img className="rt-about-gallery-img" src={Desk1} alt="DIY plywood desk I made" />
            <img className="rt-about-gallery-img" src={HandSand} alt="sanding rounded corners on a desk" />
          </div>
          <div className="rt-about-gallery-row">
            <img className="rt-about-gallery-img" src={GMM1} alt="square business cards" />
            <img className="rt-about-gallery-img" src={GMM2} alt="a webpage design" />
          </div>
          <div className="rt-about-gallery-row">
            <img className="rt-about-gallery-img" src={GMM3} alt="an About us section on a website" />
            <img className="rt-about-gallery-img" src={GMM4} alt="website blog design" />
          </div>
        </div>
      </div>
    </section>
  </Layout >
)

export default AboutPage
