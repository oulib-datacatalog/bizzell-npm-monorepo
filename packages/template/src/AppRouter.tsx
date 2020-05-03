import React, { Component } from 'react'

import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'
import { About } from './components/About'
import WidgetsPage from './components/Widgets/WidgetsPage'
import { Route, Switch } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
import SearchPage from './components/Widgets/Search/SearchPage'

export class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/widgets" component={WidgetsPage} />
          <Route path="/search" component={SearchPage} />
          {/* <Route component={PageNotFound}/> */}
        </Switch>
      </Router>
    )
  }
}
