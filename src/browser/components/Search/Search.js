import React, { Component } from 'react'
import { connect } from 'react-redux'

// actions
import { search } from '../../actions/repository-actions'

// components
import Loading from '../Loading/Loading'

class Search extends Component {
  componentDidMount() {
    const q = this.props.location.query.q
    if (q) {
      this.props.search(q)
    }
  }
  render() {
    if (this.props.result === null) {
      return <Loading />
    }
    return (
      <div>
        {JSON.stringify(this.props.result)}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  result: state.repository.search.result,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  search: query => dispatch(search(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
