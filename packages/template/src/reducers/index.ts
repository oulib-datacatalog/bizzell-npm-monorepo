import { AppAction } from '../actions'
import { AppState } from '../configureStore'

const initialState: AppState = {
  count: 0,
  isEditing: true,
}

export function reducer(
  state: AppState = initialState,
  action: AppAction,
): AppState {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'TOGGLE_EDIT':
      return {
        ...state,
        isEditing: !state.isEditing,
      }
    default:
      return state
  }
}
