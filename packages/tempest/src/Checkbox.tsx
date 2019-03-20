import React from 'react'
import PropTypes from 'prop-types'

interface CheckboxProps {
  text?: string
  defaultChecked?: boolean
  defaultEnabled?: boolean
}

const types = ['checkbox']

export class Checkbox extends React.Component<
  CheckboxProps,
  {
    isChecked: boolean
    isEnabled: boolean
  }
> {
  constructor(props: CheckboxProps) {
    super(props)

    this.state = { isChecked: false, isEnabled: true }
  }

  handleChange(event: any) {
    if (this.state.isEnabled) {
      const isInputChecked = event.target.checked
      this.setState(state => ({ isChecked: isInputChecked }))
    }
  }
  
  render() {

    const { text } = this.props
    const { isChecked } = this.state

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={text}
            checked={isChecked}
            onChange={event => this.handleChange(event)}
          />

          {text}
        </label>
      </div>
    )
  }
}
