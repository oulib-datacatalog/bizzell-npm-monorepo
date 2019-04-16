import { cleanup } from 'react-testing-library'
import { Text } from './Text'
import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

afterEach(cleanup)

//This is a test class for the Text component.
//Test ensures that the Text component renders.

describe('Text component test', () => {
  it('Should Render Text', () => {
    jest.spyOn(Text.prototype, 'render')
    mount(<Text />)
    expect(Text.prototype.render).toHaveBeenCalledTimes(1)
  })
})
