import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'

import PaginationTable from './index'

describe('src/common/pagination', () => {
    let shallow;
  
    beforeEach(() => {
      shallow = createShallow(); 
    });
  
    it('Pass number', () => {
      const wrapper = shallow(<PaginationTable />);
      expect(wrapper).toMatchSnapshot();
    });
  });
