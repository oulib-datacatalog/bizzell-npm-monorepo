import { cleanup } from 'react-testing-library'
import { Button } from './Button'
import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

afterEach(cleanup)

//This is a test class for the Button component.
//Test ensures that the Button component renders.

describe('Button component test', () => {
  it('Should Render Button', () => {
    jest.spyOn(Button.prototype, 'render')
    mount(<Button text="TestButton" primary />)
    expect(Button.prototype.render).toHaveBeenCalledTimes(1)
  })
})
