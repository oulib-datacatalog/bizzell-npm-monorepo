export interface AppAction {
  type: string
}

export function increment() {
  return { type: 'INCREMENT' }
}

export function decrement() {
  return { type: 'DECREMENT' }
}

export function toggleEditing() {
  return { type: 'TOGGLE_EDIT' }
}
