import { cleanup } from 'react-testing-library'
import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter as Router } from 'react-router-dom'
import { Landing } from './Landing'

//This is a test class for the Landing component.
//Test ensures that the Landing component renders.

Enzyme.configure({ adapter: new Adapter() })

afterEach(cleanup)

describe('Landing component test', () => {
  it('Should Render Landing Component', () => {
    jest.spyOn(Landing.prototype, 'render')
    mount(
      <Router>
        <Landing />
      </Router>,
    )
    expect(Landing.prototype.render).toHaveBeenCalledTimes(1)
  })
})
