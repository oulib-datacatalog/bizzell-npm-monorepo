// Dummy react component for testing with router
import React, { Component, Fragment } from 'react'
import { Button, justifyEnd, Card } from '@bizzell/tempest'
import FroalaEditor from 'react-froala-wysiwyg'

import styles from '../index.css'
import { Navigation } from './Navigation'
import { CardContent, CardHeader } from '@bizzell/tempest/src/Card'
const { editorContainer } = styles

export class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Card>
          <CardHeader text="Dashboard" />
          <CardContent className={editorContainer}>
            <div
              style={{
                padding: '0 12px 0',
              }}
            >
              <FroalaEditor tag="textarea" />
            </div>
          </CardContent>
          <CardContent className={justifyEnd}>
            <Button
              text="Hello World!"
              secondary
              onClick={() =>
                import('../dynamic').then(dynamic => {
                  dynamic.assertImported()
                })
              }
            />
            <Button text="Hello World!" primary />
          </CardContent>
        </Card>
      </Fragment>
    )
  }
}
