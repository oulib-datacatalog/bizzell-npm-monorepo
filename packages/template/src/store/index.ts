import { combineReducers, createStore } from 'redux'

// https://github.com/erikras/ducks-modular-redux
import counter, { CounterState } from './counter'
import editor, { EditorState } from './editor'

export interface AppState {
  counter: CounterState
  editor: EditorState
}

const appReducer = combineReducers({
  counter,
  editor,
})

export function configureStore() {
  return createStore(appReducer)
}
