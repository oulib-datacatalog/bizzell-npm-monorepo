import { cleanup } from 'react-testing-library'
import { Card } from './Card'
import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

afterEach(cleanup)

describe('Card component test', () => {
  it('Should Render Card', () => {
    jest.spyOn(Card.prototype, 'render')
    mount(<Card text="TestCard" primary />)
    expect(Card.prototype.render).toHaveBeenCalledTimes(1)
  });
});
