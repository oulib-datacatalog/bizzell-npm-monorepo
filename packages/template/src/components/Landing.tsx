import React, { Component, Fragment } from 'react'
import { Navigation } from './Navigation'
import { joinNames, column, alignCenter, Text } from '@bizzell/tempest'
import { CardContent, Card } from '@bizzell/tempest/src/Card'

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
