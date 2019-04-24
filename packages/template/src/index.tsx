import React from 'react'
import { render } from 'react-dom'

import 'promise-polyfill/src/polyfill'

if (process.env.NODE_ENV === 'development') {
  require('froala-editor/js/froala_editor.pkgd.min.js')
  require('froala-editor/css/froala_editor.pkgd.min.css')
  require('font-awesome/css/font-awesome.css')
}

import 'froala-editor/css/froala_style.min.css'

import { Provider } from 'react-redux'
import { configureStore } from './store'
import { App } from './App'

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('anchor')!,
)
