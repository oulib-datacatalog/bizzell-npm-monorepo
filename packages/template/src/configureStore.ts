import { createStore } from 'redux'
import { reducer } from './reducers'

export interface AppState {
  count: number
  isEditing: boolean
}

const initialState: AppState = {
  count: 0,
  isEditing: true,
}

export function configureStore() {
  return createStore(reducer, initialState)
}
