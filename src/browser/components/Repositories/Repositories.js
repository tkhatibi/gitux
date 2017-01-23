import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// Material UI
import RaisedButton from 'material-ui/RaisedButton'

// components
import Loading from '../Loading/Loading'

// actions
import { getCurrentUserRepositories } from '../../actions/repository-actions'

class Repositories extends Component {
  componentDidMount() {
    this.props.getCurrentUserRepositories()
  }
  render() {
    if (!this.props.repositories) {
      return <Loading />
    }
    return (
      <div>
        {JSON.stringify(this.props.repositories)}
      </div>
    )
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.

const mapStateToProps = (state, ownProps) => ({
  repositories: state.repository.current,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCurrentUserRepositories: parameters => dispatch(getCurrentUserRepositories(parameters))
})

export default connect(mapStateToProps, mapDispatchToProps)(Repositories)
