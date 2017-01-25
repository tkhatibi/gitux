import React, { Component } from 'react'
import { connect } from 'react-redux'

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
require('react-tap-event-plugin')()

// components
import TopBar from './TopBar'

// actions
import { navigateToPanel } from '../../actions/auth-actions'

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
        <div>
          <TopBar />
          <div style={{margin: 20}}>
            {this.props.children}
          </div>
        </div>
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
