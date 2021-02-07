import React, { Component } from 'react';
import { Link } from "gatsby"

class Header extends Component {

  render() {
    return (
      <div className="header-container">
        <header className="rt-header" >
          <div className="rt-container">
            <Link className="rt-header-brand" to="/">R.</Link>

            <nav className="rt-header-nav">
              <Link className="rt-header-nav-item" to="/about">about</Link>
              <Link className="rt-header-nav-item" to="/work">work</Link>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}

export default Header