import { cleanup } from 'react-testing-library'
import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navigation } from './Navigation'

//This is a test class for the Navigation component.
//Test ensures that the Navigation component renders.

configure({ adapter: new Adapter() })

afterEach(cleanup)

describe('Navigation component test', () => {
  it('Should Render Navigation Component', () => {
    jest.spyOn(Navigation.prototype, 'render')
    mount(
      <Router>
        <Navigation />
      </Router>,
    )
    expect(Navigation.prototype.render).toHaveBeenCalledTimes(1)
  })
})
