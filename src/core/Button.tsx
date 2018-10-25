import React from 'react'
import styles from './Button.css'
import { joinNames } from './styles'
const { button, primary, secondary, danger, disabled } = styles

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
    const props = this.props
    const { text, onClick } = props
    return (
      <div
        onClick={onClick}
        className={joinNames(button, {
          [primary]: props.type === 'primary' || props.primary,
          [secondary]: props.type === 'secondary' || props.secondary,
          [danger]: props.type === 'danger' || props.danger,
          [disabled]: props.disabled,
        })}
      >
        {text}
      </div>
    )
  }
}
