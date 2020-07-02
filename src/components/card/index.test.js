import React from 'react'
import { shallow } from 'enzyme'
import CardTable from './index'

let wrapped = shallow(<CardTable/>);

describe('src/components/card', () => {
  it('load component', () => {   
    expect(wrapped).toMatchSnapshot();
  });  
});