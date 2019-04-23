import React from 'react'
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView'
import { connect } from 'react-redux'
import { editContent } from './store/editor'
import { AppState } from './store'

import FroalaEditor from 'react-froala-wysiwyg'

type EditorProps = {
  id: string
  isEditing?: boolean
  content: string | Promise<{ content: string }>
  editContent?: (id: string, content: string) => unknown
}

type EditorState = {
  model: null | string
}

class Editor extends React.Component<EditorProps, EditorState> {
  constructor(props: EditorProps) {
    super(props)

    this.state = {
      model: null,
    }

    if (props.content instanceof Promise) {
      props.content.then(({ content }) => this.handleModelChange(content))
    }
  }

  handleModelChange(model: string) {
    this.setState({ model })
    if (this.props.editContent) {
      this.props.editContent(this.props.id, model)
    }
  }

  render() {
    const { id, isEditing } = this.props
    const { model } = this.state
    let editorModel: any

    if (isEditing && model) {
      editorModel = (
        <FroalaEditor
          model={model}
          onModelChange={(newModel: string) => this.handleModelChange(newModel)}
        />
      )
    } else {
      editorModel = <FroalaEditorView model={model} />
    }

    return editorModel
  }
}

let WrappedEditor: typeof Editor

if (process.env.NODE_ENV === 'production') {
  WrappedEditor = Editor
} else {
  WrappedEditor = connect(
    ({ editor: { isEditing } }: AppState) => ({
      isEditing,
    }),
    dispatch => ({
      editContent(id: string, content: string) {
        dispatch(editContent(id, content))
      },
    }),
  )(Editor) as any
}

export { WrappedEditor as Editor }
