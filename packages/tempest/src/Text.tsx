import React from 'react'
import styles from './Text.css'
import { joinNames, ClassNames } from './styles'
import { readOption } from './utils'
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
export class Text extends React.Component<TextProps> {
  render() {
    const { text, classNames } = this.props

    const type = readOption(types, this.props)
    if (type == 'title' || type == 'display') {
      return (
        <h1
          className={joinNames(textStyle, classNames, {
            [textDisplay]: type === 'display',
            [textTitle]: type === 'title',
          })}
        >
          {text}
        </h1>
      )
    } else {
      return (
        <p
          className={joinNames(textStyle, classNames, {
            [textBody]: type === 'body',
            [textCaption]: type === 'caption',
            [textButton]: type === 'button',
          })}
        >
          {text}
        </p>
      )
    }
  }
}
