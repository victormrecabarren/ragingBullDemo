import React, { Component } from 'react'

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
            <img
              src="https://ragingbull.com/wp-content/uploads/2017/05/ragingbull-logo-new.png"
              className="logo"
              alt="logo"
            />

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

          {
            !this.state.searching
            ?
            <div className="console">
            <img
              style={{height: "25px"}}
              src="/search.png"
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
                  src="/burger.png"

                 />
                :
                null
              }
          </div>
          :
          <div className="console">
            <input
              type="text"
              placeholder="search ..."
              className="search-bar"
            />
            <img
              style={{height: "20px", margin: "auto 0", padding: 0}}
              src="/exit.png"
              onClick={() => {
                this.setState({
                  searching: false,
                })
              }}
             />
          </div>
        }
        </div>
      </div>
      </>
    )
  }
}

export default Navbar
