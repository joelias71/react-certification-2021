import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import GlobalProvider from '../../../providers/Global';
import AuthProvider from '../../../providers/Auth';

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
        <AuthProvider>
          <Router>
            <Navbar {...props} />
          </Router>
        </AuthProvider>
      </GlobalProvider>
    );
  });
  it('renders...', () => {
    expect(component).toHaveLength(1);
  });
});
