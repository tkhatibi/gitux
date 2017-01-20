import React from 'react'
import {
  Route,
  IndexRoute,
} from 'react-router'

// components
import Main from './components/Main/Main'
import Public from './components/Public/Public'
import Home from './components/Home/Home'
import Guest from './components/Guest/Guest'
import Login from './components/Login/Login'
import Panel from './components/Panel/Panel'
import Dashboard from './components/Dashboard/Dashboard'
import NotFound from './components/NotFound/NotFound'

// routes
export default (
  <Route path="/" component={Main}>
    <Route component={Public}>
      <IndexRoute component={Home}/>
    </Route>
    <Route component={Guest}>
      <Route path="login" component={Login} />
    </Route>
    <Route path="panel" component={Panel}>
      <IndexRoute component={Dashboard}/>
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
)
