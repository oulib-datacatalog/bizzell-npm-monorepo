import React, { Component, Fragment } from 'react'
import { Card } from '@bizzell/tempest'

import { CardContent, CardHeader } from '@bizzell/tempest/src/Card'

import { Editor } from '../Editor'
import styles from '../index.css'
import { Navigation } from './Navigation'

const { editorContainer } = styles

export class Dashboard extends Component<{}> {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Card>
          <CardHeader text="Dashboard" />
          <CardContent className={editorContainer}>
            <div style={padded}>
              <Editor
                id="exampleFile"
                content={import('../../static/exampleFile.json')}
              />
            </div>
          </CardContent>
        </Card>
      </Fragment>
    )
  }
}

const padded = {
  padding: '0 12px 0',
}
