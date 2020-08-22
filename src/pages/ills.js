import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Book from "../images/ills/book.png"
import CareAmount from "../images/ills/care-amount.png"
import Desk from "../images/ills/desk.png"
import Imposter from "../images/ills/imposter.png"
import MentalHealth from "../images/ills/mental-health.png"
import Motivational from "../images/ills/motivational.png"
import PuffCoat from "../images/ills/the-puff-coat-years.png"
import Walk from "../images/ills/walk.png"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="rt-hero-about">
      <div className="rt-container">
        <div className="rt-hero-about-content">
          <hr className="divider-alt" />
          <h1 className="rt-hero-contact-title">ills</h1>
          <p>Growing up I was always fascinated with graffiti and any form of art that orginated from street culture. I remember sitting in the backseat of the family van, quietly admiring tags, murals and pieces that I‘d see while we drove around San Diego.</p>
          <p>I was one of those kids in high school who kept a notebook of pieces, and would spend more time practicing lettering, arrows, and characters, than I would studying algebra.</p>
          <p>That passion of art and appreciating aesthetics within design never escaped me. To this day, I find myself trying to connect with the art-side of the brain.</p>
          <p>And while I have so much to learn when it comes the visuals, the following are just a few samples of some ideas I've used in blogs or what not.</p>
          <p>Appreciate the the look. <span role="img" aria-label="prayer emoji">🙏</span></p>
        </div>
      </div>
    </section>

    <section className="rt-ills-section">
      <div className="rt-container">

      <div href="https://www.linkedin.com/pulse/success-mine-randy-tolentino/" target="_blank" rel="noopener noreferrer" className="rt-work-section-item inactive">
          <img className="rt-work-img" src={PuffCoat} alt="An illustration of minimal mountains" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">The puff coat years</h5>
            <p className="rt-about-extra-meta">
              Email newsletter hero, made in sketch
            </p>
          </div>
        </div>

        <div href="https://www.linkedin.com/pulse/success-mine-randy-tolentino/" target="_blank" rel="noopener noreferrer" className="rt-work-section-item inactive">
          <img className="rt-work-img" src={Desk} alt="A sketch of me working at my desk" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">Desk</h5>
            <p className="rt-about-extra-meta">
              Site hero, made with ink + Sketch
            </p>
          </div>
        </div>

        <div href="https://medium.com/@makertolentino/why-am-i-still-at-work-23014ebfef4d" target="_blank" rel="noopener noreferrer" className="rt-work-section-item inactive">
          <img className="rt-work-img" src={Book} alt="An illustration of a colorful stack of books" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">You are the book</h5>
            <p className="rt-about-extra-meta">
              Published on honeypot.io, made in procreate
            </p>
          </div>
        </div>

        <div href="https://medium.com/the-ascent/whos-your-favorite-motivational-speaker-49cb7cafe585" target="_blank" rel="noopener noreferrer" className="rt-work-section-item inactive">
          <img className="rt-work-img" src={CareAmount} alt="Hand gesturing levels in the air" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">Care amount</h5>
            <p className="rt-about-extra-meta">
              Published on honeypot.io, made in procreate
            </p>
          </div>
        </div>

        <div href="https://medium.com/@makertolentino/the-happiness-metric-sharing-how-you-feel-in-team-retrospectives-a5fd8fceda0" target="_blank" rel="noopener noreferrer" className="rt-work-section-item inactive">
          <img className="rt-work-img" src={MentalHealth} alt="An illustration of a child awake at night" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">Mental health</h5>
            <p className="rt-about-extra-meta">
              Published in Home Sweet Home, made in procreate</p>
          </div>
        </div>

        <div href="https://medium.com/@makertolentino/you-become-them-without-knowing-f543087a295e" target="_blank" rel="noopener noreferrer" className="rt-work-section-item inactive">
          <img className="rt-work-img" src={Motivational} alt="Illustration of me studying and watching Youtube on the couch" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">Favorite motivational speaker</h5>
            <p className="rt-about-extra-meta">
              Published on Medium, made with ink + Sketch
            </p>
          </div>
        </div>

        <div href="https://medium.com/@makertolentino/the-7-relevant-conversations-to-have-when-interviewing-in-2020-210689f0238b" target="_blank" rel="noopener noreferrer" className="rt-work-section-item inactive">
          <img className="rt-work-img" src={Imposter} alt="An illustration of a man with a hat, staring into a computer" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">Imposter syndrome</h5>
            <p className="rt-about-extra-meta">
              Published in The Startup, made with ink + Sketch
            </p>
          </div>
        </div>


        <div href="https://www.smashingmagazine.com/2019/08/creating-authentic-human-connections-remote-team/" target="_blank" rel="noopener noreferrer" className="rt-work-section-item inactive">
          <img className="rt-work-img" src={Walk} alt="An illustration of a man walking in the cold" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">The walk</h5>
            <p className="rt-about-extra-meta">
              Published in The Startup, made with ink + Sketch
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout >
)

export default AboutPage
