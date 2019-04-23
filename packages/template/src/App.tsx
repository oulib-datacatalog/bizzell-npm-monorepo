import React, { Fragment, ReactNode } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { joinNames, justifyCenter, Button, justifyEnd } from '@bizzell/tempest'

import { AppRouter } from './AppRouter'
import { AppState } from './store'
import { toggleEditing, resolveEdits, EditorState } from './store/editor'

import styles from './index.css'
import appStyles from './App.css'
const { root } = styles
const { ulStyle, liStyle } = appStyles

interface AppProps {
  isEditing: boolean
  currentEdits: { [id: string]: string }
  dispatch: Dispatch
}

class App extends React.Component<AppProps> {
  handleToggleEditing() {
    const { dispatch } = this.props
    dispatch(toggleEditing())
  }

  handleSave() {
    const { currentEdits, dispatch } = this.props
    Promise.all(
      Object.keys(currentEdits).map(id => {
        fetch(
          new Request(`http://localhost:3001/edit/${id}`, {
            method: 'POST',
            headers: {
              'content-type': 'text/json',
            },
            body: `{"content":"${currentEdits[id]}"}`,
          }),
        )
      }),
    ).then(() => dispatch(resolveEdits()))
  }

  renderEditingToolbar() {
    const { isEditing } = this.props

    return (
      <div>
        <nav>
          <ul className={joinNames(ulStyle, justifyEnd)}>
            <li className={liStyle}>
              <Button
                primary
                disabled={!isEditing}
                text="Display"
                onClick={() => this.handleToggleEditing()}
              />
            </li>
            <li className={liStyle}>
              <Button
                primary
                disabled={isEditing}
                text="Edit"
                onClick={() => this.handleToggleEditing()}
              />
            </li>
            <li className={liStyle}>
              <Button
                primary
                text="Save Changes"
                onClick={() => this.handleSave()}
              />
            </li>
          </ul>
        </nav>
      </div>
    )
  }

  render() {
    let toolbar: null | ReactNode = null

    if (process.env.NODE_ENV === 'development') {
      toolbar = this.renderEditingToolbar()
    }

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

function mapStateToProps(state: AppState): EditorState {
  return { ...state.editor }
}

const AppContainer = connect(
  mapStateToProps,
  dispatch => ({ dispatch }),
)(App)

export { AppContainer as App }
