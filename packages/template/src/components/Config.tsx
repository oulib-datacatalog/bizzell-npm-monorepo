import React, { Component, Fragment } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { RouteComponentProps } from 'react-router-dom'
import { Navigation } from './Navigation'
import { CardHeader, CardContent, Card, Text } from '@bizzell/tempest'

export class Config extends Component<RouteComponentProps> {
  render() {
    const { match } = this.props
    return (
      <Fragment>
        <Navigation />
        <Card>
          <CardContent />
        </Card>
      </Fragment>
    )
  }
}
