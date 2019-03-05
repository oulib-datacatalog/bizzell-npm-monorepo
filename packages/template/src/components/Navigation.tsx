import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from '@bizzell/tempest'
import { CardContent } from '@bizzell/tempest/src/Card'

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
