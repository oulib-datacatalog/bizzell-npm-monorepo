import React from 'react'
import { Navigation } from '../common/Navigation'
import { Card, CardContent, Button } from '@bizzell/tempest'
import { Link } from 'react-router-dom'

const WidgetsPage = () => {
  return (
    <>
      <Navigation />
      <Card>
        <CardContent>
          <Link to="/search">
            <Button text="Search" />
          </Link>
        </CardContent>
      </Card>
    </>
  )
}

export default WidgetsPage
