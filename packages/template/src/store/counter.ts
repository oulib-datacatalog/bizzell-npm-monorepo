import { Action } from 'redux'

export interface CounterState {
  count: number
}

const initialState = { count: 0 }

export default function reducer(
  state: CounterState = initialState,
  action: Action,
): CounterState {
  switch (action.type) {
    case 'counter/INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'counter/DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

export function increment() {
  return { type: 'INCREMENT' }
}

export function decrement() {
  return { type: 'DECREMENT' }
}
