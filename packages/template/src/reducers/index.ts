import { AppAction } from '../actions'
import { AppState } from '../configureStore'

const initialState: AppState = {
  count: 0,
  isEditing: true,
  // varName: value,
}

export function reducer(
  state: AppState = initialState,
  action: AppAction,
): AppState {
  switch (action.type) {
    // case example
    case 'INCREMENT':
      return {
        // returns the current state but with the count variable modified
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
