import { cleanup } from 'react-testing-library'
import { Checkbox } from './Checkbox'
import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

afterEach(cleanup)

describe('Button component test', () => {
  it('Should Render Button', () => {
    jest.spyOn(Checkbox.prototype, 'render')
    mount(<Checkbox />)
    expect(Checkbox.prototype.render).toHaveBeenCalledTimes(1)
  })
})
