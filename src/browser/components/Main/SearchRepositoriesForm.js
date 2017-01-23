import React from 'react'
import { Field, reduxForm } from 'redux-form'

// Material UI Components
import TextField from 'material-ui/TextField'

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const SearchRepositoriesForm = props => (
  <form onSubmit={props.handleSubmit} >
    <div>
      <Field
        name="query"
        component={renderTextField}
        label='Search'
      />
    </div>
  </form>
)

export default reduxForm({
  form: 'searchRepositoriesForm' // a unique name for this form
})(SearchRepositoriesForm)
