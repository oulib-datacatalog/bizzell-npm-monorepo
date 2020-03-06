import React, { Component } from 'react'

import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'
import { About } from './components/About'
import { Search } from './components/Search'
import { Tasks } from './components/Tasks'
import { Route, Switch } from 'react-router-dom'

import { HashRouter as Router } from 'react-router-dom'

export class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/search" component={Search} />
          <Route path="/tasks" component={Tasks} />
          {/* <Route component={PageNotFound}/> */}
        </Switch>
      </Router>
    )
  }
}
