import React, { Component } from 'react'
import { C1 } from './components/c1'
import { C2 } from './components/c2'
import { C3 } from './components/c3'
//import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps,
} from 'react-router-dom'

const Home = () => <C1 />
const One = () => <C2 />
const Topics = ({ match }: RouteComponentProps) => (
  <div>
    <h2 style={{ textAlign: 'center' }}>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
)

const Topic = ({ match }: RouteComponentProps<{ topicId: string }>) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/one/">One Page</Link>
          </li>

          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/one/" component={One} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)

export class BizzellRouter extends Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    )
  }
}
