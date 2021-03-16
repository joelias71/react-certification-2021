import React from 'react';
import { mount } from 'enzyme';
import Home from '../../../pages/Home/Home.page';
import GlobalProvider from '../../../providers/Global';

describe('Home', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      darkMode: true,
    };
    component = mount(
      <GlobalProvider>
        <Home {...props} />
      </GlobalProvider>
    );
  });
  it('renders...', () => {
    expect(component).toHaveLength(1);
  });
});
