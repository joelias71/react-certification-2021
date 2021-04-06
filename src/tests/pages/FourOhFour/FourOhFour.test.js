import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import FourOhFour from '../../../pages/FourOhFour/FourOhFour.page';
import GlobalProvider from '../../../providers/Global';
import AuthProvider from '../../../providers/Auth';

describe('FourOhFour', () => {
  let component;

  beforeEach(() => {
    component = mount(
      <GlobalProvider>
        <AuthProvider>
          <Router>
            <FourOhFour />
          </Router>
        </AuthProvider>
      </GlobalProvider>
    );
  });
  it('renders...', () => {
    expect(component).toHaveLength(1);
  });
});
