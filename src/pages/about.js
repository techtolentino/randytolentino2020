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
          <h1 className="rt-hero-contact-title">about</h1>
          <hr className="divider" />
          <p>I’m a husband, father, son, brother – the identifiers go on, but I always define myself in some familial aspect, at the core.</p>

          <p>Real quick: I grew up in Cali, lived in Japan between middle and high school years, attended college in the Bay area, met my wife in ’06 and eventually we moved to San Diego to start a family.</p>

          <p>I dedicated my post-university years working in education. Still, most of my energy was directed towards being an <a href="https://medium.com/codebuddies/i-used-to-write-rhymes-now-i-write-software-bf5d2b27578" target="_blank" rel="noopener noreferrer" className="text-link-dark">independent hip-hop artist</a>. But as the family grew, I had to find an actual gig that would allow me to give them the life they deserved.</p>

          <p>After being accepted into a software engineering bootcamp, we moved out to Austin. That’s where I learned to code, established a new career, and fell in love with serving the world through technology.</p>

          <p className="rt-hero-subtitle">I wake up each morning between 3:00 and 4:00 AM, devoted to the dream and excited to see this all unfold. I’m glad you’re a part of the journey.</p>

        </div>
        <div className="rt-hero-about-facts">
          <h5 className="rt-work-section-item-title">Current status</h5>
          <ul className="rt-hero-current-list">
            <li>
              <span className="rt-hero-current-category">Writing:</span>
              <span className="rt-hero-current-pick"><Link className="text-link-dark" to="/contact">The Puff Coat Chapters</Link></span>
            </li>
            <li>
              <span className="rt-hero-current-category">Reading:</span>
              <span className="rt-hero-current-pick"><em>The PowerX Strategy</em> by Markus Heitkoetter</span>
            </li>
            <li>
              <span className="rt-hero-current-category">Listening:</span>
              <span className="rt-hero-current-pick">Ed Carlsen, Aesop Rock</span>
            </li>
            <li>
              <span className="rt-hero-current-category">Studying:</span>
              <span className="rt-hero-current-pick">Ableton Live 10</span>
            </li></ul>
        </div>
      </div>
    </section>

    <section className="extra">
      <div className="rt-container">
        <div className="rt-about-extra-intro">
          <h4><strong>extra-curriculars</strong></h4>
          <p>In my spare time, I like to make things. Whether it’s woodwork, DIY projects, or design explorations, I love using the creative side of the brain.</p>
        </div>
      </div>
    </section>

    <section className="rt-work-section">
      <div className="rt-container">
        <div className="rt-about-item">
          <img className="rt-work-img" src={KeyHolder} alt="Close up illustration of someone using hand gestures" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">Family keys</h5>
            <p className="rt-about-extra-meta">
              wood, sand, & paint
            </p>
          </div>
        </div>

        <div className="rt-about-item">
          <img className="rt-work-img" src={Speakers} alt="Illustration of me holding a monitor" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">Min/Max</h5>
            <p className="rt-about-extra-meta">
              desktop speaker refinish, paint
            </p>
          </div>
        </div>

        <div className="rt-about-item">
          <img className="rt-work-img" src={Hoodie0} alt="Thumbnail of inconsistent branding images" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">The Dark Launch hoodie (dev)</h5>
            <p className="rt-about-extra-meta">
              idea, ink x moleskine
            </p>
          </div>
        </div>

        <div className="rt-about-item">
          <img className="rt-work-img" src={Hoodie2} alt="Illustration of child awake in bed" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">The Dark Launch hoodie (prod)</h5>
            <p className="rt-about-extra-meta">
              sewing project, brother and fabric
            </p>
          </div>
        </div>

        <div className="rt-about-item">
          <img className="rt-work-img" src={Bench1} alt="Bench from the edge perspective" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">The 25 bench (edge)</h5>
            <p className="rt-about-extra-meta">
              4 x 4s + stain & glue
            </p>
          </div>
        </div>

        <div className="rt-about-item">
          <img className="rt-work-img" src={Bench2} alt="Illustration of me sitting on a couch, studying" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">The 25 Bench (side)</h5>
            <p className="rt-about-extra-meta">
              same but w/ patio placement
            </p>
          </div>
        </div>

        <div className="rt-about-item">
          <img className="rt-work-img" src={EndStand1} alt="Bookshelf in progress, made from wood" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">Bookshelf (commit)</h5>
            <p className="rt-about-extra-meta">
              plywood, screws, & glue</p>
          </div>
        </div>

        <div className="rt-about-item">
          <img className="rt-work-img" src={EndStand} alt="A pair of end tables" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">Hello world end tables</h5>
            <p className="rt-about-extra-meta">
              wood from Lowes + screws, dye, and gloss
            </p>
          </div>
        </div>

        <div className="rt-about-item">
          <img className="rt-work-img" src={Desk1} alt="Three gentlemen having a discussion at a table" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">Journey desk</h5>
            <p className="rt-about-extra-meta">
              all plywood everything
            </p>
          </div>
        </div>

        <div className="rt-about-item">
          <img className="rt-work-img" src={HandSand} alt="An illustration of me staring into a computer, looking confused" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">Learning table</h5>
            <p className="rt-about-extra-meta">
              hand-sanded-border-radius: 12px;
            </p>
          </div>
        </div>

        <div className="rt-about-item">
          <img className="rt-work-img" src={GMM1} alt="A map of the world, showing team distribution across countries" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">Gray Mint Moon cards</h5>
            <p className="rt-about-extra-meta">
              some text, an underscore, & moo.com
            </p>
          </div>
        </div>

        <div className="rt-about-item">
          <img className="rt-work-img" src={GMM2} alt="A close up of empty chairs in an assembly hall" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">Viewfinders</h5>
            <p className="rt-about-extra-meta">
              photo blog mock-up, made in sketch
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout >
)

export default AboutPage
