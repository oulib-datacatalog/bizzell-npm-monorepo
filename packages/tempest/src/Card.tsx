import React from 'react'
import { Component } from 'react'
import styles from './Card.css'
import { joinNames, ClassNames } from './classNames'
import { Text } from './Text'

const { card, cardContent, cardHeader, cardFlush } = styles

type CardProps = {
  className?: ClassNames
}

export class Card extends Component<CardProps> {
  render() {
    const { className, children } = this.props
    return <div className={joinNames(className, card)}>{children}</div>
  }
}

interface CardContentProps {
  className?: ClassNames
  flush?: boolean
}

export class CardContent extends Component<CardContentProps> {
  render() {
    const { flush, className, children } = this.props
    return (
      <div className={joinNames(className, cardContent, flush && cardFlush)}>
        {children}
      </div>
    )
  }
}

interface CardHeaderProps {
  text: string
  children?: undefined
  className?: ClassNames
}

export class CardHeader extends Component<CardHeaderProps> {
  render() {
    const { text, className } = this.props
    return (
      <div className={joinNames(className, cardHeader)}>
        <Text title text={text} />
      </div>
    )
  }
}
