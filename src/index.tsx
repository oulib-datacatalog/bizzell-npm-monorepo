import { render } from 'react-dom'
import React from 'react'
import styles from './index.css'
import { Button, joinNames, justifyCenter, alignCenter } from './core'

const { root } = styles
console.log(root)

render(
  <div className={joinNames(root, justifyCenter, alignCenter)}>
    <div style={{ padding: '24px 12px 24px', backgroundColor: '#ffffff' }}>
      <Button text="Hello World!" secondary />
      <Button text="Hello World!" disabled />
      <Button text="Hello World!" primary />
      <Button text="Hello World!" danger />
    </div>
  </div>,
  document.getElementById('anchor')!,
)
