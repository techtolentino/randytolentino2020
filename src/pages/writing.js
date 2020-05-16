import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Rhymes from '../images/rhymes.jpeg'
import Hoodie from '../images/hoodie.jpeg'
import Regret from '../images/regret.jpeg'
import Success from '../images/success.jpeg'
import Connection from '../images/connection.png'
import Hidden from '../images/hidden.png'
import Conversations from '../images/conversations.jpeg'
import Become from '../images/become.jpeg'
import Happiness from '../images/happiness.jpeg'
import Motivation from '../images/motivation.png'
import Wfc from '../images/wfc.png'
import Protect from '../images/protect.png'
import Rebrand from '../images/rebrand.png'
import Monitor from '../images/monitor.png'
import Care from '../images/care.png'
import LinkOut from '../images/linkout.svg'

const WritingPage = () => (
  <Layout>
    <SEO title="Writing" />
    <section className="rt-hero-work">
      <div className="rt-container">
        <div className="rt-hero-work-content">
          <hr className="divider-alt" />
          <h1 className="rt-hero-work-title">writing</h1>
          <p>These days, I use the craft of writing to explore themes and spaces that I deeply care about: family culture, career growth, and self-development.</p>

          <p>Through personal storytelling, my goal is to help every day people like you and me, discover the hidden qualities in ourselves, so that we can have a positive impact on those around us and make the best of this journey, collectively.</p>

          <p>Nothing I write is for me. This is all for y’all. Reminding myself of that <em>there’s greater audience</em> out there, inspires me to dedicate endless hours towards writing.</p>

          <p>It’s what I love to do.</p>

          <p className="rt-hero-work-subtitle">My work has found its way into awesome publications such as Smashing Magazine, The Startup, Honeypot.io, and Better Marketing.</p>
        </div>
      </div>
    </section>

    <section className="rt-work-section">
      <div className="rt-container">
        <a href="https://cult.honeypot.io/reads/your-care-amount" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Care} alt="Close up illustration of someone using hand gestures" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">What’s Your Care Amount?</h5>
            <div className="rt-work-pub">
              <span className="rt-work-pub-label">.cult by Honeypot.io</span>
              <span className="rt-work-pub-time">4 min read</span>
              <span className="rt-work-pub-tags">team, communication</span>
            </div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://cult.honeypot.io/reads/take-my-monitor" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Monitor} alt="Illustration of me holding a monitor" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">Take My Monitor</h5>
            <div className="rt-work-pub">
              <span className="rt-work-pub-label">.cult by Honeypot.io</span>
              <span className="rt-work-pub-time">5 min read</span>
              <span className="rt-work-pub-tags">team, career</span>
            </div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://medium.com/better-marketing/how-to-design-your-own-rebrand-for-free-fcd1d5b22977" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Rebrand} alt="Thumbnail of inconsistent branding images" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">How to Design Your Own Rebrand for Free</h5>
            <div className="rt-work-pub">
              <span className="rt-work-pub-label">Better Marketing</span>
              <span className="rt-work-pub-time">7 min read</span>
              <span className="rt-work-pub-tags">career</span>
            </div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://medium.com/home-sweet-home/protecting-our-childrens-mental-health-in-a-time-of-chaos-c7748680ef7e" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Protect} alt="Illustration of child awake in bed" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">Protecting Our Children’s Mental Health in a Time of Chaos</h5>
            <div className="rt-work-pub">
              <span className="rt-work-pub-label">Home Sweet Home</span>
              <span className="rt-work-pub-time">8 min read</span>
              <span className="rt-work-pub-tags">family, mental health</span>
            </div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://medium.com/@makertolentino/why-am-i-still-at-work-23014ebfef4d" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Wfc} alt="Adapted photo of cruise ship" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">Why Am I Still At Work?</h5>
            <div className="rt-work-pub">
              <span className="rt-work-pub-label">Medium</span>
              <span className="rt-work-pub-time">4 min read</span>
              <span className="rt-work-pub-tags">family, career</span>
            </div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://medium.com/the-ascent/whos-your-favorite-motivational-speaker-49cb7cafe585" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Motivation} alt="Illustration of me sitting on a couch, studying" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">Who’s Your Favorite Motivational Speaker?</h5>
            <div className="rt-work-pub">
              <span className="rt-work-pub-label">The Ascent</span>
              <span className="rt-work-pub-time">6 min read</span>
              <span className="rt-work-pub-tags">self-development</span>
            </div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://medium.com/@makertolentino/the-happiness-metric-sharing-how-you-feel-in-team-retrospectives-a5fd8fceda0" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Happiness} alt="A cropped photo of a work team standing in a hallway" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">The Happiness Metric—Sharing How You Feel in Team Retrospectives</h5>
            <div className="rt-work-pub">
              <span className="rt-work-pub-label">Think Outside the Self</span>
              <span className="rt-work-pub-time">7 min read</span>
              <span className="rt-work-pub-tags">career, self-care, team health</span>
            </div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://medium.com/@makertolentino/you-become-them-without-knowing-f543087a295e" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Become} alt="Photo of the night sky" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">You Become Them Without Knowing</h5>
            <div className="rt-work-pub">
              <span className="rt-work-pub-label">Think Outside the Self</span>
              <span className="rt-work-pub-time">5 min read</span>
              <span className="rt-work-pub-tags">family, parenting</span>
            </div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://medium.com/@makertolentino/the-7-relevant-conversations-to-have-when-interviewing-in-2020-210689f0238b" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Conversations} alt="Three gentlemen having a discussion at a table" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">The 7 Relevant Conversations to Have When Interviewing in 2020</h5>
            <div className="rt-work-pub">
              <span className="rt-work-pub-label">Think Outside the Self</span>
              <span className="rt-work-pub-time">8 min read</span>
              <span className="rt-work-pub-tags">career, interviewing advice</span>
            </div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://medium.com/@makertolentino/the-hidden-powers-in-admitting-i-dont-know-a9bd467ad30b" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Hidden} alt="An illustration of me staring into a computer, looking confused" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">The Hidden Powers in Admitting “I Don’t Know”</h5>
            <div className="rt-work-pub">
              <span className="rt-work-pub-label">The Startup</span>
              <span className="rt-work-pub-time">10 min read</span>
              <span className="rt-work-pub-tags">career, self-development</span>
            </div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://www.smashingmagazine.com/2019/08/creating-authentic-human-connections-remote-team/" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Connection} alt="A map of the world, showing team distribution across countries" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">Creating Authentic Human Connections Within A Remote Team</h5>
            <div className="rt-work-pub">
              <span className="rt-work-pub-label">Smashing Magazine</span>
              <span className="rt-work-pub-time">11 min read</span>
              <span className="rt-work-pub-tags">career, people connection</span>
            </div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://www.linkedin.com/pulse/success-mine-randy-tolentino/" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Success} alt="A close up of empty chairs in an assembly hall" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">This Success is Not Mine</h5>
            <div className="rt-work-pub">
              <span className="rt-work-pub-label">LinkedIn Pulse</span>
              <span className="rt-work-pub-time">7 min read</span>
              <span className="rt-work-pub-tags">mentorship, self-development</span>
            </div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://www.linkedin.com/pulse/my-biggest-professional-regret-2018-randy-tolentino-1e/" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Regret} alt="A variety of vitamins on a desk, in front of a keyboard" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">My Biggest Professional Regret in 2018</h5>
            <div className="rt-work-pub">
              <span className="rt-work-pub-label">LinkedIn Pulse</span>
              <span className="rt-work-pub-time">5 min read</span>
              <span className="rt-work-pub-tags">career, work-life balance</span>
            </div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://medium.com/@makertolentino/engineering-a-hoodie-1d1b5f320d53" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Hoodie} alt="Tools for sewing, laid out on a wooden floor" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">Engineering a Hoodie—Who Said Developers Couldn't Sew?</h5>
            <div className="rt-work-pub">
              <span className="rt-work-pub-label">Think Outside the Self</span>
              <span className="rt-work-pub-time">7 min read</span>
              <span className="rt-work-pub-tags">creative process</span>
            </div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://medium.com/codebuddies/i-used-to-write-rhymes-now-i-write-software-bf5d2b27578" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Rhymes} alt="Me, rapping on stage in a blue shirt" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">I Used to Write Rhymes, Now I Write Software</h5>
            <div className="rt-work-pub">
              <span className="rt-work-pub-label">CodeBuddies</span>
              <span className="rt-work-pub-time">11 min read</span>
              <span className="rt-work-pub-tags">career, self-development</span>
            </div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

      </div>
    </section>
  </Layout >
)

export default WritingPage
