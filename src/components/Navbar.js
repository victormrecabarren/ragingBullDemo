import React, { Component } from 'react'
import DropDown from './DropDown'

import burger from '../assets/burger.png'
import search from '../assets/search.png'
import exit from '../assets/exit.png'

class Navbar extends Component {
  state = {
    searching: false,
  }



  render() {
    return(
      <>
      <div className="navbar fixed-top">
        <div className="buttonsContainer">
          <div className="logoContainer">
            <a href="http://www.ragingbull.com">
            <img
              src="https://ragingbull.com/wp-content/uploads/2017/05/ragingbull-logo-new.png"
              className="logo"
              alt="logo"
            />
            </a>

          </div>
          {
            !this.state.searching
            ?

            <div className="headerLinks">
              <a
                href="#">
                RAGINGBULL INSIDER
              </a>
              <a
                href="#">
                OUR TRAINERS
              </a>
              <a
                href="#">
                FREE OPTIONS HANDBOOK
              </a>
              <a
                href="#">
                ARTICLES
              </a>
            </div>

            : null
          }


          <div className="console">
            <input
              type="text"
              placeholder="search ..."
              className={this.state.searching ? "search-bar" : "search-bar noDisplay"}
            />
            <img
              style={{height: "20px", margin: "auto 0", padding: "0 8px"}}
              src={exit}
              className={this.state.searching? "exitButton" : "noDisplay"}
              onClick={() => {
                this.setState({
                  searching: false,
                })
              }}
             />
             <div className={this.state.searching ? "searchAndBurgerBox hiddenBox": "searchAndBurgerBox"}>
             <img
               style={{height: "25px"}}
               className={this.state.searching ? "search-glass hidden" : "search-glass"}
               src={search}
               onClick={() => {
                 this.setState({
                   searching: true,
                 })
               }}
              />
               {
                 this.props.mobile ?
                 <img
                   style={{height: "24px"}}
                   src={burger}
                   className={this.state.searching ? "burger hidden" : "burger"}
                   onClick={() => {
                     this.props.toggleDropDown()
                   }}
                  />
                 :
                 null
               }
             </div>
           </div>











        </div>
      </div>
      </>
    )
  }
}

export default Navbar
