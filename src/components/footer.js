import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer className="rt-footer">
    <div className="rt-container">
      <div className="rt-footer-meta">
        randytolentino.com © {new Date().getFullYear()}
      </div>
      <ul className="rt-footer-social">
        <li>
          <a href="https://twitter.com/makertolentino" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/randytolentino" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/techtolentino" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://medium.com/@makertolentino" target="_blank" rel="noopener noreferrer">
            Medium
          </a>
        </li>
        <li>
          <a href="mailto:makertolentino@gmail.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </li>
      </ul>
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
