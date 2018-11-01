import React from 'react'
import styles from './Button.css'
import { joinNames } from './styles'
import { readOption } from './utils'
const {
  button,
  buttonPrimary,
  buttonSecondary,
  buttonDanger,
  buttonDisabled,
} = styles

const types = ['primary', 'secondary', 'danger']

type ButtonProps = {
  disabled?: boolean
  primary?: boolean
  secondary?: boolean
  danger?: boolean
  type?: 'primary' | 'secondary' | 'danger'
  text?: string
  onClick?: () => unknown
}

// TODO: need a Text Component
export class Button extends React.Component<ButtonProps> {
  render() {
    const { text, onClick, children, disabled } = this.props
    if (children) {
      console.error('Use the "text" prop of Button instead of passing children')
    }
    const type = readOption(types, this.props, 'primary')
    return (
      <div
        onClick={disabled ? undefined : onClick}
        className={joinNames(button, {
          [buttonPrimary]: type === 'primary',
          [buttonSecondary]: type === 'secondary',
          [buttonDanger]: type === 'danger',
          [buttonDisabled]: this.props.disabled,
        })}
      >
        {text}
      </div>
    )
  }
}
