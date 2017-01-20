import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

// Material UI Components
import RaisedButton from 'material-ui/RaisedButton'

const LoginForm = props => (
  <form onSubmit={props.handleSubmit} >
    <div>
      <Field
        name="username"
        component="input"
        type="text"
        placeholder='type a github username' />
    </div>
    <div>
      <RaisedButton label='Login' primary={true} onTouchTap={props.handleSubmit} />
    </div>
  </form>
)

export default reduxForm({
  form: 'login' // a unique name for this form
})(LoginForm)
