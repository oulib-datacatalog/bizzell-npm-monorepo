import React from 'react'
import FroalaEditor from 'react-froala-wysiwyg'

type EditorProps = {
  id: string
  toggle?: boolean
  content: string
}

type EditorState = {
  model: string
}

export class Editor extends React.Component<EditorProps, EditorState> {
  constructor(props: EditorProps) {
    super(props)

    this.handleModelChange = this.handleModelChange.bind(this)

    this.state = {
      model: 'Example text',
    }
  }

  handleModelChange(model: string) {
    this.setState({
      model: model,
    })
  }

  render() {
    if (this.props.toggle) {
      return (
        <FroalaEditor
          model={this.state.model}
          onModelChange={this.handleModelChange}
        />
      )
    } else {
      return this.props.content
    }
  }
}
