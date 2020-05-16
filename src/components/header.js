import React, { Component } from 'react';
import { Link } from "gatsby"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActiveClass: '',
    }
  }

  triggerMenu = () => {
    if (this.state.menuActiveClass === '') {
      this.setState({ menuActiveClass: 'is-active' })
    } else {
      this.setState({ menuActiveClass: '' })
    }
  }

  render() {
    return (
      <>
        <header className="rt-header" >
          <div className="rt-container">
            <Link className="rt-header-brand" to="/">Randy Tolentino</Link>
            <button className={`hamburger hamburger--spin ${this.state.menuActiveClass}`} type="button" onClick={this.triggerMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <nav className="rt-header-nav">
              <Link className="rt-header-nav-item" to="/about">about</Link>
              <Link className="rt-header-nav-item" to="/work">work</Link>
              <Link className="rt-header-nav-item" to="/writing">writing</Link>
              <Link className="rt-header-nav-item" to="/contact">contact</Link>
            </nav>
          </div>
        </header>
        <aside className={`rt-header-nav-mobile ${this.state.menuActiveClass}`}>
          <Link className="rt-header-nav-item" to="/about">about</Link>
          <Link className="rt-header-nav-item" to="/work">work</Link>
          <Link className="rt-header-nav-item" to="/writing">writing</Link>
          <Link className="rt-header-nav-item" to="/contact">contact</Link>
        </aside>
      </>
    )
  }
}

export default Header