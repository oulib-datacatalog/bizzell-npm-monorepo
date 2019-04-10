import { createStore } from 'redux'
import { reducer } from './reducers'

export interface AppState {
  count: number
  isEditing: boolean
  // varName: varType
}

export function configureStore() {
  return createStore(reducer)
}
