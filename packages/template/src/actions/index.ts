export interface AppAction {
  type: string
  // varName: type
}

// basic action example
export function increment() {
  return { type: 'INCREMENT' }
}

export function decrement() {
  return { type: 'DECREMENT' }
}

export function toggleEditing() {
  return { type: 'TOGGLE_EDIT' }
}

/** more detailed action example
  export function name(args) {
  do something
  return {
    type: 'TYPENAME',
    varName: type
  }
}*/
