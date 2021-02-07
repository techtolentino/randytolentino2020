import PropTypes from "prop-types"
import React from "react"

import Youtube from '../images/icons/youtube.svg'
import Twitter from '../images/icons/twitter.svg'
import Medium from '../images/icons/medium.svg'
import Tiktok from '../images/icons/tiktok.svg'
import GitHub from '../images/icons/github.svg'
import Linkedin from '../images/icons/linkedin.svg'
import Cashapp from '../images/icons/cashapp.svg'

const Footer = () => (
  <footer className="rt-footer">
    <div className="rt-container">
      <ul className="rt-contact-list">
        <li className="rt-contact-list-item">
          <a className="rt-contact-list-link" href="https://twitter.com/makertolentino" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="Twitter" />
          </a>
        </li>
        <li className="rt-contact-list-item">
          <a className="rt-contact-list-link" href="https://linkedin.com/in/randytolentino" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="Linkedin" />
          </a>
        </li>
        <li className="rt-contact-list-item">
          <a className="rt-contact-list-link" href="https://www.youtube.com/c/makertolentino" target="_blank" rel="noopener noreferrer">
            <img src={Youtube} alt="Youtube" />
          </a>
        </li>
        <li className="rt-contact-list-item">
          <a className="rt-contact-list-link" href="https://tiktok.com/@makertolentino" target="_blank" rel="noopener noreferrer">
            <img src={Tiktok} alt="Tiktok" />
          </a>
        </li>
        <li className="rt-contact-list-item">
          <a className="rt-contact-list-link" href="https://github.com/techtolentino" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} alt="GitHub" />
          </a>
        </li>
        <li className="rt-contact-list-item">
          <a className="rt-contact-list-link" href="https://medium.com/@makertolentino" target="_blank" rel="noopener noreferrer">
            <img src={Medium} alt="Medium" />
          </a>
        </li>
        <li className="rt-contact-list-item">
          <a className="rt-contact-list-link" href="https://cash.app/$makertolentino" target="_blank" rel="noopener noreferrer">
            <img src={Cashapp} alt="Cashapp" />
          </a>
        </li>
      </ul>
      <div className="rt-footer-meta">
        randytolentino.com © {new Date().getFullYear()}
      </div>
    </div>
  </footer >
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
