import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Body from './components/Body'

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


          <div className="footerLinks">
            <img
              style={{height: "50px"}}
              src="https://ragingbull.com/wp-content/themes/ragingbullwp/assets/img/logo-rb-2-org.svg"
            />
            <div
              className="linksBox"
              >
              <div>
                HOME
              </div>
              <div>
                OUR TRAINERS
              </div>
              <div>
                AFFILIATE
              </div>
              <div>
                ARTICLES
              </div>
              <div>
                FAQ
              </div>
              <div>
                CONTACT
              </div>
              <div>
                LOGIN
              </div>
            </div>

            <div className="socialBox">
              sm links
            </div>
          </div>


          <div className="endNotes">
            RagingBull.com is the premier destination for both new or experienced active traders who are looking for stock picks, stock ideas, how to get started trading stocks, and overall stock market education. Our team is comprised of real millionaire stock traders who put their money to work everyday in the markets by actively trading penny stocks, ETF’s, options, small-cap stocks and biotech stocks.
          </div>
          <div className="endNotes">
            * Results may not be typical and may vary from person to person. Making money trading stocks takes time, dedication, and hard work. There are inherent risks involved with investing in the stock market, including the loss of your investment. Past performance in the market is not indicative of future results. Any investment is at your own risk.
          </div>

          <div className="endNotes">
            © Copyright 2018, RagingBull - Refund Policy - Privacy Policy - Terms & Conditions - Disclaimer
          </div>


        </div>
      </div>
    )
  }
}

export default App;
