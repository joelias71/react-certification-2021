import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../../pages/Home/Home.page';

describe('Home', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      darkMode: true,
    };
    component = shallow(<Home {...props} />);
  });
  it('renders...', () => {
    expect(component).toHaveLength(1);
  });
});
