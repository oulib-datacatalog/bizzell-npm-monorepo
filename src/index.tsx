import { render } from 'react-dom'
import React from 'react'
import styles from './index.css'

const { root } = styles
console.log(root)

render(
  <div className={root}>Hello World!</div>,
  document.getElementById('anchor')!,
)
