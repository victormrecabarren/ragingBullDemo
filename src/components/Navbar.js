import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return(
      <>
      <div className="navbar fixed-top">
        <div className="buttonsContainer">
          <div>
            <img
              src="https://ragingbull.com/wp-content/uploads/2017/05/ragingbull-logo-new.png"
              className="logo"
              alt="logo"
            />

            {this.props.width}
            {this.props.mobile ?
              <p>mobile</p> : null
            }

          </div>
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
            search
          </a>
        </div>
      </div>
      </>
    )
  }
}

export default Navbar
