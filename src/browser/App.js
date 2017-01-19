/**
 * Root Component
 */
import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
// import IntlWrapper from './modules/Intl/IntlWrapper'

export default function App(props) {
  return (
    <Provider store={props.store}>
      {/*<IntlWrapper>*/}
        <Router history={props.history}>
          {props.routes}
        </Router>
      {/*</IntlWrapper>*/}
    </Provider>
  )
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
}

