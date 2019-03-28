import React, { Component, Fragment } from 'react'
import { Navigation } from './Navigation'
import {
  joinNames,
  column,
  alignCenter,
  Text,
  Card,
  CardContent,
} from '@bizzell/tempest'

export class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Card>
          <CardContent className={joinNames(column, alignCenter)}>
            <Text title text="Hello World" />
            <Text body text="Welcome to your new application!" />
          </CardContent>
        </Card>
      </Fragment>
    )
  }
}
