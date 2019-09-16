import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar'
import DropDown from './components/DropDown'
import Body from './components/Body'
import Footer from './components/Footer'


class App extends Component {
  state = {
    mobile: (window.innerWidth > 900 ? false : true),
    width: window.innerWidth,
    dropDown: false,
  }


  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    if (window.innerWidth > 975) {
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

toggleDropDown = () => {
  this.setState({
    dropDown: !this.state.dropDown,
  })
}





  render() {
    return (

      <div className="mainContainer">
        <Navbar
          width={this.state.width}
          mobile={this.state.mobile}
          toggleDropDown={this.toggleDropDown}
         />
         {
           this.state.mobile
           ?
           <DropDown
             open={this.state.dropDown}
           />
           :
           null
         }
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
