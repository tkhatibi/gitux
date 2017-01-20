import React, { Component } from 'react'
import { connect } from 'react-redux'

import { navigateToPanel } from '../../actions/auth-actions'

class Guest extends Component {
  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.navigateToPanel()
    }
  }
  render() {
    return this.props.children
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: state.auth.isLoggedIn,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateToPanel: () => dispatch(navigateToPanel()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Guest)
