import React, { Component } from 'react'

// Material UI
import FlatButton from 'material-ui/FlatButton'

export default class LoginButton extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    )
  }
}
