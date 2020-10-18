import React from "react"
import PropTypes from 'prop-types'
import "../styles/index.scss"
import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout