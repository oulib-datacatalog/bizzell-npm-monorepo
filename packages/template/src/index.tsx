import React from 'react'
import { render } from 'react-dom'

import 'froala-editor/js/froala_editor.pkgd.min.js'
import 'froala-editor/css/froala_style.min.css'
import 'froala-editor/css/froala_editor.pkgd.min.css'
import 'font-awesome/css/font-awesome.css'

import { Provider } from 'react-redux'
import { configureStore } from './configureStore'
import { App } from './App'

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('anchor')!,
)
