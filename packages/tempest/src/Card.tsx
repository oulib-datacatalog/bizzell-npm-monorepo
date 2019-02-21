import React, { ReactChild, Component, ReactNode } from 'react'
import styles from './Card.css'
import { joinNames, ClassNames } from './classNames'
import { readOption } from './utils'

const { cardStyle, cardContent, cardHeader, cardMedia, cardDisabled } = styles

const types = ['content', 'header', 'media', 'disabled']

type CardProps = {
  className: ClassNames
  children: {
    header: ReactChild
    media: ReactChild
    content: ReactChild
  }
}

export class Card extends Component<CardProps> {
  render() {
    // kept in this.props.children becuase this.props reconfiguration made page go dark
    const { header, media, content } = this.props.children

      return (
        <div className = {cardStyle}>
          <div className={cardHeader}> {header} </div>
          <div className={cardMedia}> {media} </div>
          <div className={cardContent}> {content} </div>
        </div>
      )
    }
    
}
