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

const WritingPage = () => (
  <Layout>
    <SEO title="Writing" />
    <section className="rt-hero-work">
      <div className="rt-container">
        <div className="rt-hero-work-content">
          <hr className="divider-alt" />
          <h1 className="rt-hero-work-title">writing</h1>
          <p>As a Software Developer with a specialized focus on front end technologies, I’ve had the privilege of building products and delivering services to clients around the world.</p>
          <p>In addition, I currently serve as the Product Design Lead on our current project, which gives me the opportunity to help advocate for design and push for design thinking as a strategy to solve our user’s problems.</p>
          <p className="rt-hero-work-subtitle">This collective body of work has served people on many levels, from internal product teams to major, national nonprofit organizations, and large enterprise clients as well.</p>
        </div>
      </div>
    </section>

    <section className="rt-work-section">
      <div className="rt-container">
        <div className="rt-work-section-item">
          <img className="rt-work-img" src={Protect} alt="Screen capture of Data Explorer on IBM Cloud Pak for Security" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">Protecting Our Children’s Mental Health in a Time of Chaos</h5>
            <span className="rt-work-pub"><small>Home Sweet Home</small></span>
          </div>
        </div>

        <div className="rt-work-section-item">
          <img className="rt-work-img" src={Wfc} alt="Screen capture of Case Artifacts on IBM Cloud Pak for Security" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">Why Am I Still At Work?</h5>
            <span className="rt-work-pub"><small>Medium</small></span>
          </div>
        </div>

        <div className="rt-work-section-item">
          <img className="rt-work-img" src={Motivation} alt="Screen capture of Experience Guide" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">Who’s Your Favorite Motivational Speaker?</h5>
            <span className="rt-work-pub"><small>The Ascent</small></span>
          </div>
        </div>

        <div className="rt-work-section-item">
          <img className="rt-work-img" src={Happiness} alt="Screen capture of Parkinson’s Foundation homepage" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">The Happiness Metric—Sharing How You Feel in Team Retrospectives</h5>
            <span className="rt-work-pub"><small>Think Outside the Self</small></span>
          </div>
        </div>

        <div className="rt-work-section-item">
          <img className="rt-work-img" src={Become} alt="Screen capture of AHA landing page" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">You Become Them Without Knowing</h5>
            <span className="rt-work-pub"><small>Think Outside the Self</small></span>
          </div>
        </div>

        <div className="rt-work-section-item">
          <img className="rt-work-img" src={Conversations} alt="Screen capture of the CMTA USA homepage" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">The 7 Relevant Conversations to Have When Interviewing in 2020</h5>
            <span className="rt-work-pub"><small>Think Outside the Self</small></span>
          </div>
        </div>

        <div className="rt-work-section-item">
          <img className="rt-work-img" src={Hidden} alt="Screen capture of the IBM Whitewater tools page" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">The Hidden Powers in Admitting “I Don’t Know”</h5>
            <span className="rt-work-pub"><small>The Startup</small></span>
          </div>
        </div>

        <div className="rt-work-section-item">
          <img className="rt-work-img" src={Connection} alt="Screen capture of MyIBM Mobile screens" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">Creating Authentic Human Connections Within A Remote Team</h5>
            <span className="rt-work-pub"><small>Smashing Magazine</small></span>
          </div>
        </div>

        <div className="rt-work-section-item">
          <img className="rt-work-img" src={Success} alt="Screen capture of MyIBM Mobile screens" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">This Success is Not Mine</h5>
            <span className="rt-work-pub"><small>LinkedIn Pulse</small></span>
          </div>
        </div>

        <div className="rt-work-section-item">
          <img className="rt-work-img" src={Regret} alt="Screen capture of MyIBM Mobile screens" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">My Biggest Professional Regret in 2018</h5>
            <span className="rt-work-pub"><small>LinkedIn Pulse</small></span>
          </div>
        </div>

        <div className="rt-work-section-item">
          <img className="rt-work-img" src={Hoodie} alt="Screen capture of MyIBM Mobile screens" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">Engineering a Hoodie—Who Said Developers Couldn't Sew?</h5>
            <span className="rt-work-pub"><small>Think Outside the Self</small></span>
          </div>
        </div>

        <div className="rt-work-section-item">
          <img className="rt-work-img" src={Rhymes} alt="Screen capture of MyIBM Mobile screens" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">I Used to Write Rhymes, Now I Write Software</h5>
            <span className="rt-work-pub"><small>CodeBuddies</small></span>
          </div>
        </div>

      </div>
    </section>
  </Layout >
)

export default WritingPage
