import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getCurrentUserProfile } from '../../actions/user-actions'

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentUserProfile()
  }
  render() {
    if (this.props.profile === null) {
      return (
        <div>
          Dashboard
        </div>
      )
    }
    return (
      <div>
        {JSON.stringify(this.props.profile)}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  profile: state.user.current,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCurrentUserProfile: () => dispatch(getCurrentUserProfile()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
