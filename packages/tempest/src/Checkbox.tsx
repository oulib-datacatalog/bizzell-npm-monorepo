import React, { Component } from 'react'
import PropTypes from 'prop-types'

interface CheckboxProps {
  text?: string
  defaultChecked?: boolean
  defaultEnabled?: boolean
}

const types = ['checkbox']

export default class Checkbox extends React.Component<
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

  render() {
    const handleChange = (event: any) => {
      if (this.state.isEnabled) {
        const isInputChecked = event.target.checked
        this.setState(state => ({ isChecked: !state.isChecked }))
      }
    }

    const { text } = this.props
    const { isChecked } = this.state
    const { isEnabled } = this.state

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={text}
            checked={isChecked}
            onChange={handleChange}
          />

          {text}
        </label>
      </div>
    )
  }
}
