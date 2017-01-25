import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// Material UI
import Toggle from 'material-ui/Toggle'

// components
import Loading from '../Loading/Loading'
import Repository from '../Repository/Repository'

// actions
import { getCurrentUserRepositories, toggleForkFilter } from '../../actions/repository-actions'

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
        <div className="filters">
          <Toggle
            label="Just Forks"
            labelPosition="right"
            onToggle={this.props.toggleForkFilter}
            toggled={this.props.forkFilter}
          />
        </div>
        <div className="repositories">
          {this.props.repositories.map(item => <Repository key={item.id} {...item} />)}
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
  repositories: state.repository.forkFilter
    ? state.repository.current.filter(item => item.fork)
    : state.repository.current,
  forkFilter: state.repository.forkFilter,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCurrentUserRepositories: parameters => dispatch(getCurrentUserRepositories(parameters)),
  toggleForkFilter: () => dispatch(toggleForkFilter()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Repositories)
