import React from 'react';
import { mount } from 'enzyme';
import HomeContent from '../../../components/HomeContent';
import GlobalProvider from '../../../providers/Global';

describe('HomeContent', () => {
  let component;

  beforeEach(() => {
    const state = {
      darkMode: true,
      param: 'wizeline',
      selectedVideo: {},
      listofVideos: [],
      error: null,
      seeVideoDetail: false,
    };
    component = mount(
      <GlobalProvider value={{ state, dispatch: jest.fn }}>
        <HomeContent />
      </GlobalProvider>
    );
  });
  it('renders...', () => {
    expect(component).toHaveLength(1);
  });
});
