import React from 'react'
import { shallow } from 'enzyme'
import TableStarships from './index'

let wrapped = shallow(<TableStarships/>);

describe('src/components/tableStarships', () => {
  it('load component', () => {   
    expect(wrapped).toMatchSnapshot();
  });  
});