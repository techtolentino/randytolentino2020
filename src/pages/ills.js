import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Book from "../images/ills/book.png"
import CareAmount from "../images/ills/care-amount.png"
import Desk from "../images/ills/desk.png"
import Debugging from "../images/ills/imposter.png"
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
          <hr className="divider" />
          <h1 className="rt-hero-contact-title">ills</h1>
          <p>Growing up I was always fascinated with graffiti and any form of art that orginated from street culture. I remember sitting in the backseat of the family van, quietly admiring tags, murals and pieces that I‘d see while we drove around San Diego.</p>
          <p>I was one of those kids in high school who kept a notebook of pieces, and would spend more time practicing lettering, arrows, and characters, than I would studying algebra.</p>
          <p>More recently, I‘ve tried to reconnect with that passion of appreciating the same aesthetics within design. I‘d argue that this love for art never escaped me. And this is why I keep designers, illustrators, and makers in the network.</p>
          <p>I know I have so much to learn when it comes to visuals and modern day tooling. Still, it‘s something I love &mdash; and so the following pieces are just a few samples of some ideas I've used in blogs or what not.</p>
          <p>Nonetheless, I appreciate the the look. <span role="img" aria-label="prayer emoji">🙏</span></p>
        </div>
      </div>
    </section>

    <section className="rt-ills-section">
      <div className="rt-container">

        <a href={PuffCoat} className="rt-ills-item">
          <img className="rt-work-img" src={PuffCoat} alt="An illustration of minimal mountains" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">The puff coat years</h5>
            <p className="rt-about-extra-meta">
              Email newsletter hero, made in sketch
            </p>
          </div>
        </a>

        <a href={Desk} className="rt-ills-item">
          <img className="rt-work-img" src={Desk} alt="A sketch of me working at my desk" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">Desk</h5>
            <p className="rt-about-extra-meta">
              Site hero, made with ink + Sketch
            </p>
          </div>
        </a>

        <a href={Book} className="rt-ills-item">
          <img className="rt-work-img" src={Book} alt="An illustration of a colorful stack of books" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">You are the book</h5>
            <p className="rt-about-extra-meta">
              Published on honeypot.io, made in procreate
            </p>
          </div>
        </a>

        <a href={CareAmount} className="rt-ills-item">
          <img className="rt-work-img" src={CareAmount} alt="Hand gesturing levels in the air" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">Care amount</h5>
            <p className="rt-about-extra-meta">
              Published on honeypot.io, made in procreate
            </p>
          </div>
        </a>

        <a href={MentalHealth} className="rt-ills-item">
          <img className="rt-work-img" src={MentalHealth} alt="An illustration of a child awake at night" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">Mental health</h5>
            <p className="rt-about-extra-meta">
              Published in Home Sweet Home, made in procreate</p>
          </div>
        </a>

        <a href={Motivational} className="rt-ills-item">
          <img className="rt-work-img" src={Motivational} alt="Illustration of me studying and watching Youtube on the couch" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">Favorite speaker</h5>
            <p className="rt-about-extra-meta">
              Published on Medium, made with ink + Sketch
            </p>
          </div>
        </a>

        <a href={Debugging} className="rt-ills-item">
          <img className="rt-work-img" src={Debugging} alt="An illustration of a man with a hat, staring into a computer" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">Debugging</h5>
            <p className="rt-about-extra-meta">
              Published in The Startup, made with ink + Sketch
            </p>
          </div>
        </a>


        <a href={Walk} className="rt-ills-item">
          <img className="rt-work-img" src={Walk} alt="An illustration of a man walking in the cold" />
          <div className="rt-work-meta extra">
            <h5 className="rt-work-section-item-title">The walk</h5>
            <p className="rt-about-extra-meta">
              Published in The Startup, made with ink + Sketch
            </p>
          </div>
        </a>

      </div>
    </section>
  </Layout >
)

export default AboutPage
