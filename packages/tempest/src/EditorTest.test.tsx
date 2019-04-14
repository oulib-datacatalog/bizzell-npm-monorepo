import { cleanup } from 'react-testing-library'
import { Button } from './Button'
import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

afterEach(cleanup)

describe('<Editor /> component', () =>{

  it('should render', () => {
    const editorComponent = shallow(<Editor />);
    const tree = toJson(editorComponent);
    expect(tree).toMatchSnapshot();
    });

});
