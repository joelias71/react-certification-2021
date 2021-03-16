import React from 'react';
import { mount } from 'enzyme';
import VideoDetails from '../../../pages/VideoDetails/VideoDetails.page';
import { GlobalContext } from '../../../providers/Global';

describe('Home', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
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
    component = mount(
      <GlobalContext.Provider value={{ state: props, dispatch: jest.fn }}>
        <VideoDetails {...props} />
      </GlobalContext.Provider>
    );
  });
  it('renders...', () => {
    expect(component).toHaveLength(1);
  });
});
