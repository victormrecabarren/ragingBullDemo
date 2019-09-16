import React, { Component } from 'react'

class DropDown extends Component {
  render() {
    return(
      <div
        className={
          this.props.open ?
          'dropDownMenu dropDownMenuOpen'
          :
          'dropDownMenu'
        }
        >
          <div className="dropDownLinksContainer">
            <div className="dropDownLink">
              Ragingbull insider
            </div>
            <div className="dropDownLink linkHeader">
              Our trainers
            </div>
            <div className="dropDownLink">
              <ul className="dropDownLink dropDownList">
                <li className="dropDownLink listItem">
                  kyle dennis
                </li>
                <li className="dropDownLink listItem">
                  jason bond
                </li>
                <li className="dropDownLink listItem">
                  jeff bishop
                </li>
                <li className="dropDownLink listItem">
                  petra hess
                </li>
                <li className="dropDownLink listItem">
                  jeff williams
                </li>
                <li className="dropDownLink listItem">
                  davis martin
                </li>
              </ul>
            </div>
            <div className="dropDownLink">
              Free options handbook
            </div>
            <div className="dropDownLink linkHeader">
              articles
            </div>
            <div className="dropDownLink">
              <ul className="dropDownLink dropDownList">
                <li className="dropDownLink listItem">
                  education center
                </li>
                <li className="dropDownLink listItem">
                  biotech stocks
                </li>
                <li className="dropDownLink listItem">
                  momentum stocks
                </li>
                <li className="dropDownLink listItem">
                  marijuana stocks
                </li>
                <li className="dropDownLink listItem">
                  options trading
                </li>
                <li className="dropDownLink listItem">
                  penny stocks
                </li>
                <li className="dropDownLink listItem">
                  large-cap stocks
                </li>
                <li className="dropDownLink listItem">
                  visual training
                </li>
              </ul>
            </div>
          </div>
      </div>
    )
  }
}

export default DropDown
