import React from 'react'
import {
  Route,
  IndexRoute,
} from 'react-router'

import Main from './components/Main/Main'
import Login from './components/Login/Login'
import Panel from './components/Panel/Panel'
import Dashboard from './components/Dashboard/Dashboard'
import NotFound from './components/NotFound/NotFound'

export default (
  <Route path="/" component={Main}>
    <Route path="login" component={Login}/>
    <Route component={Panel}>
      <IndexRoute component={Dashboard}/>
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
)
