import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../../../pages/Home/Home.page';
import GlobalProvider from '../../../providers/Global';
import AuthProvider from '../../../providers/Auth';

describe('Home', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      darkMode: true,
    };
    component = mount(
      <GlobalProvider>
        <AuthProvider>
          <Router>
            <Home {...props} />
          </Router>
        </AuthProvider>
      </GlobalProvider>
    );
  });
  it('renders...', () => {
    expect(component).toHaveLength(1);
  });
});
