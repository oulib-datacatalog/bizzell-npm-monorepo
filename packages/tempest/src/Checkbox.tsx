<<<<<<< HEAD
import React, { Component } from 'react'
import PropTypes from 'prop-types'

type Props = {
  label?: string
  defaultChecked?: boolean
  checkedIcon?: any
  uncheckedIcon?: any
}

const types = ['checkbox']

export default class Checkbox extends React.Component<Props, {}> {
  private textInput!: HTMLInputElement

  state = {
    isChecked: false,
  }

  handleChange = () => {
    const isInputChecked = this.textInput.checked
    this.setState({ isChecked: isInputChecked })
  }

  render() {
    const { label } = this.props
    const { isChecked } = this.state

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.handleChange}
          />

          {label}
        </label>
      </div>
    )
  }
}
=======
import React, { Component } from 'react'
import PropTypes from 'prop-types'

type Props = {
  label?: string
  defaultChecked?: boolean
  checkedIcon?: any
  uncheckedIcon?: any
}

const types = ['checkbox']

export default class Checkbox extends React.Component<Props, {}> {
  private textInput!: HTMLInputElement

  state = {
    isChecked: false,
  }

  handleChange = () => {
    const isInputChecked = this.textInput.checked
    this.setState({ isChecked: isInputChecked })
  }

  render() {
    const { label } = this.props
    const { isChecked } = this.state

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.handleChange}
          />

          {label}
        </label>
      </div>
    )
  }
}
>>>>>>> checkbox changes
