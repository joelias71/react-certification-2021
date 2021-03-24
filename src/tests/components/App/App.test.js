import React from 'react';
import { mount } from 'enzyme';
import App from '../../../components/App';
import GlobalProvider from '../../../providers/Global';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = mount(
      <GlobalProvider>
        <App />
      </GlobalProvider>
    );
  });
  it('renders...', () => {
    expect(component).toHaveLength(1);
  });
});
