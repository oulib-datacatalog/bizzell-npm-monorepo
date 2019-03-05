import React, { Component, Fragment } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { RouteComponentProps } from 'react-router-dom'
import { Navigation } from './Navigation'
import { CardHeader, CardContent, Card } from '@bizzell/tempest/src/Card'
import { Text } from '@bizzell/tempest'

export class About extends Component<RouteComponentProps> {
  render() {
    const { match } = this.props
    return (
      <Fragment>
        <Navigation />
        <Card>
          <CardHeader text="Topics" />
          <CardContent>
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
          </CardContent>
          <CardContent>
            <Switch>
              <Route path={`${match.url}/:topicId`} component={Topic} />
              <Route
                exact
                path={match.url}
                render={() => <Text body text="Please select a topic" />}
              />
            </Switch>
          </CardContent>
        </Card>
      </Fragment>
    )
  }
}

const Topic = ({ match }: RouteComponentProps<{ topicId: string }>) => (
  <Text body text={match.params.topicId} />
)
