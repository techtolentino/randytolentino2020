import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// dev work
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

// writing
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

// illustrations
import Book from "../images/ills/book.png"
import CareAmount from "../images/ills/care-amount.png"
import Desk from "../images/ills/desk.png"
import Debugging from "../images/ills/imposter.png"
import MentalHealth from "../images/ills/mental-health.png"
import Motivational from "../images/ills/motivational.png"
import PuffCoat from "../images/ills/the-puff-coat-years.png"
import Walk from "../images/ills/walk.png"

// extra-curr
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

// import Resume from '../assets/Randy_Tolentino_-_Professional_Resume_2020.pdf';
// import Portfolio from '../assets/Randy_Tolentino_-_Portfolio_of_Experiences_2020.pdf';

// import { trackCustomEvent } from 'gatsby-plugin-google-analytics'



const WorkPage = () => (
  <Layout>
    <SEO title="Work" />
    <section className="rt-hero-work">
      <div className="rt-container">
        <div className="rt-hero-work-content">
          <hr className="divider" />
          <h1 className="rt-hero-work-title">work</h1>
          <p>I’m one of the lucky ones. I say that because I truly believe the most fascinating and influential aspects of technology are found at the intersection of design and engineering.</p>
          <p>That's where I live.</p>
          <p>In my role, I exchange information at the cross path of user experience and implementation, to ensure that we arrive with the nice experiences for others.</p>
          <p className="rt-hero-work-subtitle">This collective body of work has served people on many levels, from internal product teams to major, national nonprofit organizations, and large enterprise clients as well.</p>
          <p><em><small>For a detailed resume and updated portfolio, please <a className="text-link-dark" href="mailto:makertolentino@gmail.com" target="_blank" rel="noopener noreferrer">send a message</a>.</small></em></p>

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
            <div className="rt-work-meta-stack">React, Redux, NextJS, Sass, microservices</div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://www.ibm.com/products/cloud-pak-for-security" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Artifacts} alt="Screen capture of Case Artifacts on IBM Cloud Pak for Security" />
          <div className="rt-work-meta">
            <h5 className="rt-work-section-item-title">Case Artifacts</h5>
            <span className="rt-work-org"><small><strong>IBM Security</strong></small></span>
            <div className="rt-work-meta-stack">React, Redux, Sass, microservices architecture</div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <div className="rt-work-section-item inactive">
          <img className="rt-work-img" src={ExperienceGuide} alt="Screen capture of Experience Guide" />
          <div className="rt-work-meta">
            <h5 className="rt-work-section-item-title">Security Experience Guide</h5>
            <span className="rt-work-org"><small><strong>IBM Security</strong></small></span>
            <div className="rt-work-meta-stack">React, GatsbyJS, Sass, Carbon design system</div>
          </div>
          <img className="rt-link-external" src={Disabled} alt="link is disabled" />
        </div>

        <a href="https://www.parkinson.org/" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Parkinsons} alt="Screen capture of Parkinson’s Foundation homepage" />
          <div className="rt-work-meta">
            <h5 className="rt-work-section-item-title">Full website build</h5>
            <span className="rt-work-org"><small><strong>Parkinson’s Foundation</strong></small></span>
            <div className="rt-work-meta-stack">PHP, HTML, CSS, Javascript</div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://www2.heart.org/site/SPageServer/?pagename=cn_home" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={AHA} alt="Screen capture of AHA landing page" />
          <div className="rt-work-meta">
            <h5 className="rt-work-section-item-title">National events site</h5>
            <span className="rt-work-org"><small><strong>American Heart Association</strong></small></span>
            <div className="rt-work-meta-stack">Angular 1.6, CSS, HTML, CoffeeScript</div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://www.cmtausa.org/" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={CMTA} alt="Screen capture of the CMTA USA homepage" />
          <div className="rt-work-meta">
            <h5 className="rt-work-section-item-title">Customized theme</h5>
            <span className="rt-work-org"><small><strong>Charcot-Marie-Tooth Association</strong></small></span>
            <div className="rt-work-meta-stack">Wordpress, PHP, CSS, HTML, Javascript</div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <a href="https://medium.com/design-ibm/listen-to-the-wild-ducks-how-ibm-adopted-slack-2bcfd3732680" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Whitewater} alt="Screen capture of the IBM Whitewater tools page" />
          <div className="rt-work-meta">
            <h5 className="rt-work-section-item-title">Whitewater project</h5>
            <span className="rt-work-org"><small><strong>IBM CIO</strong></small></span>
            <div className="rt-work-meta-stack">NodeJS, Express, HTML, Sass, Handlebars</div>
          </div>
          <img className="rt-link-external" src={LinkOut} alt="visit site" />
        </a>

        <div className="rt-work-section-item inactive">
          <img className="rt-work-img" src={Mobile} alt="Screen capture of MyIBM Mobile screens" />
          <div className="rt-work-meta">
            <h5 className="rt-work-section-item-title">MyIBM Mobile</h5>
            <span className="rt-work-org"><small><strong>IBM Design</strong></small></span>
            <div className="rt-work-meta-stack">React Native, HTML, CSS, Javascript</div>
          </div>
          <img className="rt-link-external" src={Disabled} alt="link is disabled" />
        </div>
      </div>
    </section>


    <section className="rt-hero-writing">
      <div className="rt-container">
        <div className="rt-hero-work-content">
          <hr className="divider" />
          <h1 className="rt-hero-work-title">writing</h1>
          <p>These days, I use the craft of writing to explore themes and spaces that I deeply care about: family culture, career growth, and self-development.</p>
          <p>Through personal storytelling, my goal is to help every day people like you and me, discover the hidden qualities in ourselves, so that we can have a positive impact on those around us and make the best of this journey, collectively.</p>
          <p>Nothing I write is for me. This is all for y’all.</p>
          <p className="rt-hero-work-subtitle">My work has found its way into awesome publications such as Smashing Magazine, The Startup, Honeypot.io, and Better Marketing.</p>
        </div>
      </div>
    </section>

    <section className="rt-work-section rt-bg-alt">
      <div className="rt-container">
        <a href="https://cult.honeypot.io/reads/your-care-amount" target="_blank" rel="noopener noreferrer" className="rt-work-section-item">
          <img className="rt-work-img" src={Care} alt="Close up illustration of someone using hand gestures" />
          <div className="rt-work-meta writing">
            <h5 className="rt-work-section-item-title">What’s Your Care Amount?</h5>
            <div className="rt-work-pub">
              <span className="rt-work-pub-label">.cult by Honeypot.io</span>
              <span className="rt-work-pub-time">5 min read</span>
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
              <span className="rt-work-pub-time">8 min read</span>
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
          <img className="rt-work-img" src={Wfc} alt="Cruise ship" />
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
          <img className="rt-work-img" src={Happiness} alt="A work team standing in a hallway" />
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
          <img className="rt-work-img" src={Become} alt="the night sky" />
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
    <section className="rt-hero-about rt-bg-alt">
      <div className="rt-container">
        <div className="rt-hero-about-content">
          <hr className="divider" />
          <h1 className="rt-hero-contact-title">side</h1>
          <p>In my spare time, I like to make things and work on side-projects. Whether it’s woodwork, DIY projects, or design explorations, I love using the creative side of the brain.</p>
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
            <h5 className="rt-work-section-item-title">The 25 bench (side)</h5>
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

export default WorkPage
