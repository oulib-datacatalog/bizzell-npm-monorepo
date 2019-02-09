import styles from './Button.css'
import { Text } from './Text'
import { joinNames, ClassNames } from './classNames'
import { readOption, createComponent } from './utils'

const types = ['primary', 'secondary', 'danger']

const {
  button,
  buttonPrimary,
  buttonSecondary,
  buttonDanger,
  buttonDisabled,
} = styles

type ButtonProps = {
  classNames?: ClassNames
  disabled?: boolean
  primary?: boolean
  secondary?: boolean
  danger?: boolean
  type?: typeof types[number]
  text?: string
  onClick?: () => unknown
}

function noop() {}

// TODO: need a Text Component
export const Button = createComponent<ButtonProps>((h, ctx) => {
  const { text, onClick, disabled, classNames } = ctx.props
  if (ctx.children) {
    console.error('Use the "text" prop of Button instead of passing children')
  }
  const type = readOption(types, ctx.props, 'secondary')
  return (
    <div
      onClick={disabled ? noop : onClick || noop}
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
