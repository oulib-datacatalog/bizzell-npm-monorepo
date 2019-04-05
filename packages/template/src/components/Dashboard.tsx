import React, { Component, Fragment } from 'react'
import { Button, justifyEnd, Card, Editor } from '@bizzell/tempest'

import styles from '../index.css'
import { Navigation } from './Navigation'
import { CardContent, CardHeader } from '@bizzell/tempest/src/Card'
import { AppState } from '../configureStore'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
const { editorContainer } = styles

interface DashboardProps extends AppState {
  dispatch: Dispatch
}

class Dashboard extends Component<DashboardProps> {
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
              <Editor
                id="1"
                toggle={this.props.isEditing}
                content="add html here"
              />
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

function mapStateToProps(state: AppState) {
  return { ...state }
}

const DashboardContainer = connect(
  mapStateToProps,
  dispatch => ({ dispatch }),
)(Dashboard)

export { DashboardContainer as Dashboard }
