/** basic counter as a placeholder */

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

export const store = createStore(reducer, initialState)
