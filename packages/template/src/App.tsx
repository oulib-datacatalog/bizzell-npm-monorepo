import React, { Fragment } from 'react'
import { AppRouter } from './AppRouter'
import {
  joinNames,
  justifyCenter,
  Button,
  justifyEnd,
  Text,
} from '@bizzell/tempest'
import { AppState } from './configureStore'
import { connect } from 'react-redux'

import styles from './index.css'
import { Dispatch } from 'redux'
import { toggleEditing } from './actions'
const { root } = styles

interface AppProps extends AppState {
  dispatch: Dispatch
}

class App extends React.Component<AppProps> {
  handleToggleEditing() {
    const { dispatch } = this.props
    dispatch(toggleEditing())
  }

  renderEditingToolbar() {
    const { isEditing } = this.props

    return (
      <div
        className={justifyEnd}
        style={{
          color: '#ffffff',
          position: 'fixed',
          right: '0',
          top: '0',
          margin: '24px 12px 0',
        }}
      >
        <Button
          primary
          disabled={isEditing}
          text="Display"
          onClick={() => this.handleToggleEditing()}
        />
        <Button
          primary
          disabled={!isEditing}
          text="Edit"
          onClick={() => this.handleToggleEditing()}
        />
      </div>
    )
  }

  render() {
    const toolbar = this.renderEditingToolbar()

    return (
      <Fragment>
        {toolbar}
        <div className={joinNames(root, justifyCenter)}>
          <div
            style={{
              padding: '24px 0 0',
              minWidth: '700px',
              minHeight: '500px',
            }}
          >
            <AppRouter />
          </div>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state: AppState) {
  return { ...state }
}

const AppContainer = connect(
  mapStateToProps,
  dispatch => ({ dispatch }),
)(App)

export { AppContainer as App }
