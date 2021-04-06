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
    };
    const props = {
      videos: {
        listofVideos: [],
      },
    };
    component = mount(
      <GlobalProvider value={{ state }}>
        <HomeContent {...props} />
      </GlobalProvider>
    );
  });
  it('renders...', () => {
    expect(component).toHaveLength(1);
  });
});
