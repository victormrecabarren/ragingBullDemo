import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'

class App extends Component {
  state = {
    mobile: this.mobile,
    width: window.innerWidth,
  }

  mobile = window.innerWidth > 900 ? false : true

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    if (window.innerWidth > 900) {
      this.setState({
        width: window.innerWidth,
        mobile: false,
      })
    } else {
      this.setState({
        width: window.innerWidth,
        mobile: true,
      })
    }

  }




  render() {
    return (

      <div className="mainContainer">
        <Navbar
          width={this.state.width}
          mobile={this.state.mobile}
         />
        <div className="body">
          <Body />
        </div>
        <div className="footerContainer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
