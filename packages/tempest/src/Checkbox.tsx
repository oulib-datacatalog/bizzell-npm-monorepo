import React, { Component } from 'react'
import PropTypes from 'prop-types'

type Props = {
  label?: string
  defaultChecked?: boolean
  defaultEnabled?: boolean
  checkedIcon?: any
  uncheckedIcon?: any
}

const types = ['checkbox']

export default class Checkbox extends React.Component<
  Props,
  {
    isChecked: boolean
    isEnabled: boolean
  }
> {
  constructor(props: Props) {
    super(props)

    this.state = { isChecked: false, isEnabled: true }
  }

  render() {
    const handleChange = (event: any) => {
      if (this.state.isEnabled) {
        const isInputChecked = event.target.checked
        this.setState({ isChecked: isInputChecked })
      }
    }

    const { label } = this.props
    const { isChecked } = this.state
    const { isEnabled } = this.state

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={handleChange}
          />

          {label}
        </label>
      </div>
    )
  }
}
