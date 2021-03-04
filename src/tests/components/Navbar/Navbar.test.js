import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../../components/Navbar';

describe('Navbar', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      darkMode: true,
      setDarkMode: jest.fn,
    };
    component = shallow(<Navbar {...props} />);
  });
  it('renders...', () => {
    expect(component).toHaveLength(1);
  });
});
