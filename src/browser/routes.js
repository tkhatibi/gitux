import React from 'react'
import {
  Route,
  IndexRoute,
} from 'react-router'

// components
import Main from './components/Main/Main'
import Guest from './components/Guest/Guest'
import Login from './components/Login/Login'
import Panel from './components/Panel/Panel'
import Dashboard from './components/Dashboard/Dashboard'
import NotFound from './components/NotFound/NotFound'

// routes
export default (
  <Route path="/" component={Main}>
    <Route component={Guest}>
      <Route path="login" component={Login} />
    </Route>
    <Route component={Panel}>
      <IndexRoute component={Dashboard}/>
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
)
