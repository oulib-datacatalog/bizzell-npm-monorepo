import React, {Component} from 'react'
import styles from './Tooltip.css'
import { joinNames, ClassNames } from './classNames'
import { readOption } from './utils'
const {
  tooltip,
  tooltiptext
} = styles

export class ToolTip extends React.Component {
  render() {
    const {children} = this.props
    if (children) {
      console.error('Use the "text" prop of Button instead of passing children')
    return (
      <div className={joinNames(tooltip)} >
        {this.props.text}
        <small className={joinNames(tooltiptext)}>{this.props.tip}</small>
      </div>
    );
  }
}