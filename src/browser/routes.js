import React from 'react'
import {
  Route,
  IndexRoute,
} from 'react-router'

// components
import Main from './components/Main/Main'
import Login from './components/Login/Login'
import Panel from './components/Panel/Panel'
import Dashboard from './components/Dashboard/Dashboard'
import NotFound from './components/NotFound/NotFound'

// helpers
import { authorize } from './helpers/auth'

// routes
export default (
  <Route path="/" component={Main}>
    <Route path="login" component={Login} onEnter={authorize} />
    <Route component={Panel}>
      <IndexRoute component={Dashboard}/>
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
)
