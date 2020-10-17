import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Parkinsons from '../images/parkinsons.png'
import CMTA from '../images/cmta.png'
import AHA from '../images/aha.png'
import Whitewater from '../images/whitewater.png'
import Mobile from '../images/mobile.png'
import DataExplorer from '../images/export.png'
import ExperienceGuide from '../images/guide.png'
import Artifacts from '../images/artifacts.png'
import LinkOut from '../images/linkout.svg'
import Disabled from '../images/disabled.svg'

// import Resume from '../assets/Randy_Tolentino_-_Professional_Resume_2020.pdf';
// import Portfolio from '../assets/Randy_Tolentino_-_Portfolio_of_Experiences_2020.pdf';

// import { trackCustomEvent } from 'gatsby-plugin-google-analytics'



const WorkPage = () => (
  <Layout>
    <SEO title="Work" />
    <section className="rt-hero-work">
      <div className="rt-container">
        <div className="rt-hero-work-content">
          <h1 className="rt-hero-work-title">work</h1>
          <hr className="divider" />
          <p>I’m one of the lucky ones. I say that because I truly believe the most fascinating and influential aspects of technology are found at the intersection of design and engineering.</p>
          <p>That's where I live.</p>
          <p>As a Senior UX Engineer, I work at the cross path of user experience and implementation to ensure that we deliver the best possible experiences for our users.</p>
          <p className="rt-hero-work-subtitle">This collective body of work has served people on many levels, from internal product teams to major, national nonprofit organizations, and large enterprise clients as well.</p>
          <p><em><small>For a detailed resume and updated portfolio, please <a className="text-link-dark" href="mailto:makertolentino@gmail.com" target="_blank" rel="noopener noreferrer">send me a message</a>.</small></em></p>

        </div>
      </div>
    </section>

    <section className="rt-work-section">
      <div className="rt-container">

        <a href="https://www.ibm.com/products/cloud-pak-for-security" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={DataExplorer} alt="Screen capture of Data Explorer on IBM Cloud Pak for Security" />
          <div className="rt-work-meta">
            <h5 className="rt-work-section-item-title">Data Explorer</h5>
            <span className="rt-work-org"><small><strong>IBM Security</strong></small></span>
            <p>For the Data Explorer application, I built several client facing features that enable security analysts to perform their jobs. These features inlclude the ability for analysts to toggle and view raw data, along with the ability to export that data in several file formats.</p>
            <div className="rt-work-meta-stack">React, Redux, NextJS, Sass, microservices</div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://www.ibm.com/products/cloud-pak-for-security" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Artifacts} alt="Screen capture of Case Artifacts on IBM Cloud Pak for Security" />
          <div className="rt-work-meta">
            <h5 className="rt-work-section-item-title">Case Artifacts</h5>
            <span className="rt-work-org"><small><strong>IBM Security</strong></small></span>
            <p>In a separate area of the IBM Cloud Pak for Security platform, I implemented the UI for the entire artifacts experience. This enabled our users to add artifacts of interest to a case, a critical functionality in their daily workflows.</p>
            <div className="rt-work-meta-stack">React, Redux, Sass, microservices architecture</div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <div className="rt-work-section-item inactive">
          <img className="rt-work-img" src={ExperienceGuide} alt="Screen capture of Experience Guide" />
          <div className="rt-work-meta">
            <h5 className="rt-work-section-item-title">Security Experience Guide</h5>
            <span className="rt-work-org"><small><strong>IBM Security</strong></small></span>
            <p>The Security Experience Guide served as an internal, resource platform that provides research, marketing assets, and style guidance for the entire Security business unit. I shared this project with two colleagues, and we built the entire platform in four months.</p>
            <div className="rt-work-meta-stack">React, GatsbyJS, Sass, Carbon design system</div>
          </div>
          <img className="rt-link-external" src={Disabled} alt="link is disabled" />
        </div>

        <a href="https://www.parkinson.org/" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Parkinsons} alt="Screen capture of Parkinson’s Foundation homepage" />
          <div className="rt-work-meta">
            <h5 className="rt-work-section-item-title">Full website build</h5>
            <span className="rt-work-org"><small><strong>Parkinson’s Foundation</strong></small></span>
            <p>One of my first major projects as a Senior Web Developer was to build the new Parkinson’s Foundation website. I was the only dev resource on this project and this was my first time within the Drupal ecosystem.</p>
            <div className="rt-work-meta-stack">PHP, HTML, CSS, Javascript</div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://www2.heart.org/site/SPageServer/?pagename=cn_home" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={AHA} alt="Screen capture of AHA landing page" />
          <div className="rt-work-meta">
            <h5 className="rt-work-section-item-title">National events site</h5>
            <span className="rt-work-org"><small><strong>American Heart Association</strong></small></span>
            <p>For American Heart Association, a large part of my contributions involved supporting our Principal Web Developer in building out the landing pages, registration flow, and interactive participant center. Most of this project was built in Angular and CoffeeScript.</p>
            <div className="rt-work-meta-stack">Angular 1.6, CSS, HTML, CoffeeScript</div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://www.cmtausa.org/" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={CMTA} alt="Screen capture of the CMTA USA homepage" />
          <div className="rt-work-meta">
            <h5 className="rt-work-section-item-title">Customized theme</h5>
            <span className="rt-work-org"><small><strong>Charcot-Marie-Tooth Association</strong></small></span>
            <p>As the sole developer for this project, I built a custom Wordpress theme for CMTA USA. The complexity of this work involved integrating over 50 plugins, along with the need to create varying levels of permissions and access to the Wordpress backend.</p>
            <div className="rt-work-meta-stack">Wordpress, PHP, CSS, HTML, Javascript</div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://medium.com/design-ibm/listen-to-the-wild-ducks-how-ibm-adopted-slack-2bcfd3732680" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Whitewater} alt="Screen capture of the IBM Whitewater tools page" />
          <div className="rt-work-meta">
            <h5 className="rt-work-section-item-title">Whitewater project</h5>
            <span className="rt-work-org"><small><strong>IBM CIO</strong></small></span>
            <p>As a front end developer for the Whitewater team, I helped build the UI for an internal tooling and practices platform. I also contributed to our team’s custom, scalable design system that allowed us to move quickly while maintaining consistency.</p>
            <div className="rt-work-meta-stack">NodeJS, Express, HTML, Sass, Handlebars</div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <div className="rt-work-section-item inactive">
          <img className="rt-work-img" src={Mobile} alt="Screen capture of MyIBM Mobile screens" />
          <div className="rt-work-meta">
            <h5 className="rt-work-section-item-title">MyIBM Mobile</h5>
            <span className="rt-work-org"><small><strong>IBM Design</strong></small></span>
            <p>In my very first major project, a fellow developer and I had to quickly learn React Native to build a fully functioning native app. Our design, implementation, and user flows inspired multiple product offerings for MyIBM Mobile.</p>
            <div className="rt-work-meta-stack">React Native, HTML, CSS, Javascript</div>
          </div>
          <img className="rt-link-external" src={Disabled} alt="link is disabled" />
        </div>

      </div>
    </section>
  </Layout >
)

export default WorkPage
