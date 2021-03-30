import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Favorites from '../../../pages/Favorites/Favorites.page';
import GlobalProvider from '../../../providers/Global';
import AuthProvider from '../../../providers/Auth';
import { storage } from '../../../utils/storage';
import { FAVORITE_VIDEOS } from '../../../utils/constants';

describe('Home', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      videos: {
        listofVideos: [],
      },
    };
    storage.set(FAVORITE_VIDEOS, { listofVideos: [] });
    component = mount(
      <GlobalProvider>
        <AuthProvider>
          <Router>
            <Favorites {...props} />
          </Router>
        </AuthProvider>
      </GlobalProvider>
    );
  });
  it('renders...', () => {
    expect(component).toHaveLength(1);
  });
});
