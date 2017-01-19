import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

export default class MainContainer extends Component {
  render() {
    return (
      <MuiThemeProvider>
        Main
      </MuiThemeProvider>
    );
  }
}
