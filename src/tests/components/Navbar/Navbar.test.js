import React from 'react';
import { mount } from 'enzyme';
import Navbar from '../../../components/Navbar';
import GlobalProvider from '../../../providers/Global';

describe('Navbar', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      sidebar: false,
      setSidebar: jest.fn,
    };
    component = mount(
      <GlobalProvider>
        <Navbar {...props} />
      </GlobalProvider>
    );
  });
  it('renders...', () => {
    expect(component).toHaveLength(1);
  });
});
