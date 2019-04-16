import { cleanup } from 'react-testing-library'
import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { About } from './About'

//This is a test class for the Landing component.
//Test ensures that the Landing component renders.

Enzyme.configure({ adapter: new Adapter() })

afterEach(cleanup)

describe('About component test', () => {
  it('Should Render About Component', () => {
    jest.spyOn(About.prototype, 'render')
    mount(
      <Router>
        <Route component={About} />
      </Router>,
    )
    expect(About.prototype.render).toHaveBeenCalledTimes(1)
  })
})
