import { render } from 'react-dom'
import React from 'react'

import { BizzellRouter } from './router'

render(
  <div>
    <BizzellRouter />
  </div>,
  document.getElementById('anchor')!,
)
