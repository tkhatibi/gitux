import React, { Component } from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import { navigateToPanel } from '../../actions/auth-actions'

injectTapEventPlugin()

class Main extends Component {
  componentDidUpdate(prevProps) {
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn

    if (isLoggingIn) {
      this.props.navigateToPanel()
    } else if (isLoggingOut) {
      // do any kind of cleanup or post-logout redirection here
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        {this.props.children}
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: state.auth.isLoggedIn,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateToPanel: () => dispatch(navigateToPanel()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
