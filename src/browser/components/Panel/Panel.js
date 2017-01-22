import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// Material UI
import RaisedButton from 'material-ui/RaisedButton'

// actions
import { navigateToLogin } from '../../actions/auth-actions'

class Panel extends Component {
  componentWillMount() {
    if (!this.props.isLoggedIn) {
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)
      this.props.navigateToLogin()
    }
  }

  render() {
    return (
      <div className="panel">
        <div className="panel-buttons">
          <Link to="/panel">
            <RaisedButton label='Dashboard' />
          </Link>
          <Link to="/panel/repos">
            <RaisedButton label='Repositories' />
          </Link>
        </div>
        <div className="panel-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: state.auth.isLoggedIn,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateToLogin: () => dispatch(navigateToLogin(ownProps.location.pathname)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Panel)
