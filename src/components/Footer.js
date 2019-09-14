import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return(
      <>
        <div className="footerLinks">
          <img
            style={{height: "50px"}}
            className="footerLogo"
            src="https://ragingbull.com/wp-content/themes/ragingbullwp/assets/img/logo-rb-2-org.svg"
          />
          <ul
            className="linksBox"
            >
            <li>
              HOME
            </li>
            <li>
              OUR TRAINERS
            </li>
            <li>
              AFFILIATE
            </li>
            <li>
              ARTICLES
            </li>
            <li>
              FAQ
            </li>
            <li>
              CONTACT
            </li>
            <li>
              LOGIN
            </li>
          </ul>

          <div className="socialBox">
            <img
              className="smIcons"
              src="./fb.png" />
            <img
              className="smIcons"
              src="./twitter.png" />
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
      </>
    )
  }
}

export default Footer
