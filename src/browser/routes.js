import React from 'react'
import {
  Route,
  IndexRoute,
} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import Home from './Home'
import NotFound from './NotFound'

export default (
  <Route
    path="/"
    component={MuiThemeProvider} >
    <IndexRoute component={Home} />
    <Route path="*" component={NotFound} />
  </Route>
)
