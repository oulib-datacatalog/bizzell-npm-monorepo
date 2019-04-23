import { Action } from 'redux'

export interface EditorState {
  isEditing: boolean
  currentEdits: { [id: string]: string }
  saving: boolean
}

interface ToggleEditing extends Action {
  type: 'editor/TOGGLE_EDITING'
}

interface EditContent extends Action {
  type: 'editor/EDIT_CONTENT'
  id: string
  content: string
}

interface ResolveEdits extends Action {
  type: 'editor/RESOLVE_EDITS'
  id: string
}

type EditorAction = ToggleEditing | EditContent | ResolveEdits

const initialState: EditorState = {
  isEditing: false,
  currentEdits: {},
  saving: false,
}

let reducer: (
  state: EditorState | undefined,
  action: EditContent,
) => EditorState

if (process.env.NODE_ENV === 'development') {
  reducer = function editorReducer(
    state: EditorState = initialState,
    action: EditorAction,
  ) {
    switch (action.type) {
      case 'editor/EDIT_CONTENT': {
        return {
          ...state,
          currentEdits: {
            ...state.currentEdits,
            [action.id]: action.content,
          },
        }
      }
      case 'editor/RESOLVE_EDITS': {
        return { ...state, currentEdits: {} }
      }
      case 'editor/TOGGLE_EDITING': {
        return {
          ...state,
          isEditing: !state.isEditing,
        }
      }
      default: {
        return state
      }
    }
  }
} else {
  reducer = function editorReducer(state: EditorState = initialState) {
    return state
  }
}

export default reducer

export function toggleEditing(): ToggleEditing {
  return {
    type: 'editor/TOGGLE_EDITING',
  }
}

export function editContent(id: string, content: string): EditContent {
  return {
    type: 'editor/EDIT_CONTENT',
    id,
    content,
  }
}

export function resolveEdits() {
  return {
    type: '@editor/resolve-update',
  }
}
