import React, { Component } from 'react'
import { C1 } from './components/c1'
import { C2 } from './components/c2'
import { C3 } from './components/c3'
import './router.css'
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
    <h1 style={{ textAlign: 'center' }}>Topics</h1>
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
const Rendering = () => <h1>Rendering with React</h1>
const Components = () => <h1>Components</h1>
const PropsVsState = () => <h1>Props vs. State</h1>

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
      <Route path="/topics/rendering" component={Rendering} />
      <Route path="/topics/components" component={Components} />
      <Route path="/topics/props-v-state" component={PropsVsState} />
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
