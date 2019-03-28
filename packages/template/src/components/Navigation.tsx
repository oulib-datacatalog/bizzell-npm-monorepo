import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardContent } from '@bizzell/tempest'

export class Navigation extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Link to="/">
            <Button text="Home" />
          </Link>
          <Link to="/dashboard">
            <Button text="Dashboard" />
          </Link>
          <Link to="/about">
            <Button text="About" />
          </Link>
        </CardContent>
      </Card>
    )
  }
}
