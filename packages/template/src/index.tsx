import { render } from 'react-dom'
import React from 'react'
import styles from './index.css'
import { Button, joinNames, justifyCenter, alignCenter } from '@bizzell/tempest'
import { DisplayRenderer, LayoutRoot } from '@bizzell/wizard'

const { root } = styles

function ButtonDemo() {
  return (
    <div>
      <Button
        text="Hello World!"
        secondary
        onClick={() =>
          import('./dynamic').then(dynamic => {
            dynamic.assertImported()
          })
        }
      />
      <Button text="Hello World!" disabled />
      <Button text="Hello World!" primary />
      <Button text="Hello World!" danger />
    </div>
  )
}

const layoutRoot: LayoutRoot = {
  appName: 'demo',
  layout: {
    type: 'custom',
    customComponent: 'buttonDemo',
    props: {},
  },
  customComponents: {
    buttonDemo: ButtonDemo,
  },
}

render(
  <div className={joinNames(root, justifyCenter, alignCenter)}>
    <div style={{ padding: '24px 12px 24px', backgroundColor: '#ffffff' }}>
      <DisplayRenderer {...layoutRoot} />
    </div>
  </div>,
  document.getElementById('anchor')!,
)
