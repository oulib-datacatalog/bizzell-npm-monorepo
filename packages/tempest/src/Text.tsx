import styles from './Text.css'
import { joinNames, ClassNames } from './classNames'
import { readOption, createComponent } from './utils'

const {
  textStyle,
  textBody,
  textCaption,
  textDisplay,
  textTitle,
  textButton,
} = styles

const types = ['body', 'caption', 'display', 'title', 'button']

type TextProps = {
  classNames?: ClassNames
  body?: boolean
  caption?: boolean
  display?: boolean
  title?: boolean
  button?: boolean
  type?: 'body' | 'caption' | 'display' | 'title' | 'button'
  text?: string
}

// TODO: need a Text Component
export const Text = createComponent<TextProps>((h, ctx) => {
  const { text, classNames } = ctx.props

  const type = readOption(types, ctx.props)

  const className = joinNames(textStyle, classNames, {
    [textDisplay]: type === 'display',
    [textTitle]: type === 'title',
    [textBody]: type === 'body',
    [textCaption]: type === 'caption',
    [textButton]: type === 'button',
  })

  if (type == 'title' || type == 'display') {
    return <h1 className={className}>{text}</h1>
  } else {
    return <p className={className}>{text}</p>
  }
})
