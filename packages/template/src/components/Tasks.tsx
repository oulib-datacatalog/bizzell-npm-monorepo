import React, { Component, Fragment, ChangeEvent } from 'react'
import { Navigation } from './Navigation'
import {
  joinNames,
  column,
  alignCenter,
  Text,
  Card,
  CardContent,
} from '@bizzell/tempest'

export class Tasks extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    }
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value })
  }

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <Navigation />
      </Fragment>
    )
  }
}
