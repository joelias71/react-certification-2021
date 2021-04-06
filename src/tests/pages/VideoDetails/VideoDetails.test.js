import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import VideoDetails from '../../../pages/VideoDetails/VideoDetails.page';
import { GlobalContext } from '../../../providers/Global';
import { FAVORITE_VIDEOS } from '../../../utils/constants';
import { storage } from '../../../utils/storage';
import AuthProvider from '../../../providers/Auth';

describe('Home', () => {
  let component;
  let props;
  let globalProps;

  beforeEach(() => {
    globalProps = {
      selectedVideo: {
        id: {
          videoId: 1,
        },
        snippet: {
          title: 'Wizeline',
          description:
            'Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline ...',
        },
      },
      listofVideos: [
        {
          etag: 'S1Ewc2IMjGC1VE5mH3AryZ43IPQ',
          snippet: {
            thumbnails: {
              high: {
                url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
              },
            },
            title: 'Wizeline',
            description:
              'Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline ...',
          },
        },
      ],
    };
    storage.set(FAVORITE_VIDEOS, { listofVideos: [] });
    props = {
      videos: {
        listofVideos: [],
      },
    };
    component = mount(
      <GlobalContext.Provider value={{ state: globalProps, dispatch: jest.fn }}>
        <AuthProvider>
          <Router>
            <VideoDetails {...props} />
          </Router>
        </AuthProvider>
      </GlobalContext.Provider>
    );
  });
  it('renders...', () => {
    expect(component).toHaveLength(1);
  });
});
