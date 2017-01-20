import React, { Component } from 'react'
import { connect } from 'react-redux'

import { authorize, navigateToPanel } from '../../actions/auth-actions'

class Login extends Component {
  componentDidMount() {
    const accessToken  = this.props.location.query.access_token
    if (this.props.isLoggedIn) {
      this.props.navigateToPanel()
    } else if (accessToken) {
      this.props.authorize(accessToken)
    }
  }
  render() {
    return (
      <a href={$config.githubApi.authorizeUrl}>
        Login (Github)
      </a>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: state.auth.isLoggedIn,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  authorize: accessToken => dispatch(authorize(accessToken)),
  navigateToPanel: () => dispatch(navigateToPanel()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
