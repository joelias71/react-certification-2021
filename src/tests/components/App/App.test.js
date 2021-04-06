import React from 'react';
import { mount } from 'enzyme';
import App from '../../../components/App';
import GlobalProvider from '../../../providers/Global';
import AuthProvider from '../../../providers/Auth';

describe('App', () => {
  let component;

  beforeEach(() => {
    const portal = document.createElement('div');
    portal.setAttribute('id', 'portal');
    document.body.appendChild(portal);

    component = mount(
      <GlobalProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </GlobalProvider>
    );
  });
  it('renders...', () => {
    expect(component).toHaveLength(1);
  });
});
