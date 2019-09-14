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
          asdf
      </div>
    )
  }
}

export default DropDown
