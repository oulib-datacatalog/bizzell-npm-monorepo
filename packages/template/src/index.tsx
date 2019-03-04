import { render } from 'react-dom'
import React from 'react'
import styles from './index.css'
import {
  Button,
  joinNames,
  justifyCenter,
  alignCenter,
  justifyEnd,
} from '@bizzell/tempest'
import { DisplayRenderer, LayoutRoot } from '@bizzell/wizard'

import 'froala-editor/js/froala_editor.pkgd.min.js'
import 'froala-editor/css/froala_style.min.css'
import 'froala-editor/css/froala_editor.pkgd.min.css'
import 'font-awesome/css/font-awesome.css'

import FroalaEditor from 'react-froala-wysiwyg'
import { BizzellRouter } from './router'

const { root, editorContainer } = styles

function ButtonDemo() {
  return (
    <div>
      <div className={editorContainer}>
        <FroalaEditor tag="textarea" />
      </div>
      <div className={justifyEnd}>
        <Button
          text="Hello World!"
          secondary
          onClick={() =>
            import('./dynamic').then(dynamic => {
              dynamic.assertImported()
            })
          }
        />
        <Button text="Hello World!" primary />
      </div>
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
  <div>
    <BizzellRouter />
    <div className={joinNames(root, justifyCenter, alignCenter)}>
      <div
        style={{ padding: '24px 24px 24px 24px', backgroundColor: '#ffffff' }}
      >
        <DisplayRenderer {...layoutRoot} />
      </div>
    </div>
  </div>,
  document.getElementById('anchor')!,
)
