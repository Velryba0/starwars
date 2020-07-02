import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'

let wrapped = shallow(<Header/>);

describe('src/common/header', () => {
  it('load component', () => {   
    expect(wrapped).toMatchSnapshot();
  });  
});