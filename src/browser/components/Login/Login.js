import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginForm from './LoginForm'
import { login } from '../../actions/auth-actions'

const Login = props => (
  // {/*<LoginForm onSubmit={props.handleSubmit} />*/}
  <a href={$config.githubApi.authorizeUrl}>
    Login (Github)
  </a>
)

const mapStateToProps = state => ({
  auth: state.auth,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmit: values => {
    dispatch(login(values.username))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
