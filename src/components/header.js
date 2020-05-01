import React from 'react';
import { Link } from "gatsby"

export default () => {

  return (
    <header className="rt-header">
      <div className="rt-container">
        <Link className="rt-header-brand" to="/">R.</Link>
        <nav className="rt-header-nav">
          <Link className="rt-header-nav-item" to="/about">about</Link>
          <Link className="rt-header-nav-item" to="/work">work</Link>
          <Link className="rt-header-nav-item" to="/writing">writing</Link>
          <Link className="rt-header-nav-item" to="/contact">contact</Link>
        </nav>
      </div>
    </header>
  )
}