import React from 'react'
import { shallow } from 'enzyme'
import SearchNavbar from './index'

let wrapped = shallow(<SearchNavbar/>);

describe('src/components/searchNavbar', () => {
  it('load component', () => {   
    expect(wrapped).toMatchSnapshot();
  });  
});