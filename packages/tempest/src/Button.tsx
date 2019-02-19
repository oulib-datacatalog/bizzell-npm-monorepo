import React from 'react'
import styles from './Button.css'
import { Text } from './Text'
import { joinNames, ClassNames } from './classNames'
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
  classNames?: ClassNames
  disabled?: boolean
  primary?: boolean
  secondary?: boolean
  danger?: boolean
  type?: 'primary' | 'secondary' | 'danger'
  text?: string
  onClick?: () => unknown
}

export class Button extends React.Component<ButtonProps> {
  render() {
    const { text, onClick, children, disabled, classNames } = this.props
    if (children) {
      console.error('Use the "text" prop of Button instead of passing children')
    }
    const type = readOption(types, this.props, 'secondary')
    return (
      <div
        onClick={disabled ? undefined : onClick}
        className={joinNames(button, classNames, {
          [buttonPrimary]: type === 'primary',
          [buttonSecondary]: type === 'secondary',
          [buttonDanger]: type === 'danger',
          [buttonDisabled]: this.props.disabled,
        })}
      >
        <Text text={text} button />
      </div>
    )
  }
}
