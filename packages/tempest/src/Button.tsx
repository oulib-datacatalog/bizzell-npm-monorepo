import styles from './Button.css'
import { Text } from './Text'
import { joinNames, ClassNames } from './classNames'
import { readOption, createComponent } from './utils'

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

// TODO: need a Text Component
export const Button = createComponent<ButtonProps>((_, ctx) => {
  const { text, onClick, disabled, classNames } = ctx.props
  if (ctx.children) {
    console.error('Use the "text" prop of Button instead of passing children')
  }
  const type = readOption(types, ctx.props, 'secondary')
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={joinNames(button, classNames, {
        [buttonPrimary]: type === 'primary',
        [buttonSecondary]: type === 'secondary',
        [buttonDanger]: type === 'danger',
        [buttonDisabled]: ctx.props.disabled,
      })}
    >
      <Text text={text} button />
    </div>
  )
})
