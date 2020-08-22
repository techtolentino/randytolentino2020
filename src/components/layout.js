import React, { Component } from "react"
import "../styles/index.scss"
import Header from '../components/header'
import Footer from '../components/footer'

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleClass: '',
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }

  handleScroll() {
    if (document.documentElement.scrollTop > 600) {
      this.setState({ visibleClass: 'is-visible' });
    } else {
      this.setState({ visibleClass: '' })
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }


  render() {
    return (
      <>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
        <button className={`rt-page-scroll-up ${this.state.visibleClass}`} onClick={this.scrollToTop}>↑</button>
      </>
    )
  }
}

export default Layout
